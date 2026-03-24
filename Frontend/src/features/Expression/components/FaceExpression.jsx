import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";
import './faceExpression.scss'

export default function FaceExpression({ onClick = () => { } }) {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [expression, setExpression] = useState("Detecting...");

    useEffect(() => {
        async function start() {
            await init({ landmarkerRef, videoRef, streamRef })
        }

        start()

        return () => {
            if (landmarkerRef.current) {
                landmarkerRef.current.close()
            }

            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject
                    .getTracks()
                    .forEach(track => track.stop())
            }
        }
    }, [])

    async function handleClick() {
        const result = detect({ landmarkerRef, videoRef, setExpression })
        if (result) {
            console.log(result)
            onClick(result)
        }
    }


    return (
        <div className="face-expression">
            <div className="face-expression__video-container">
                <video
                    ref={videoRef}
                    playsInline
                />
            </div>
            <h2 className="face-expression__status">{expression}</h2>
            <button className="face-expression__button" onClick={handleClick}>
                Detect Emotion
            </button>
        </div>
    );
}