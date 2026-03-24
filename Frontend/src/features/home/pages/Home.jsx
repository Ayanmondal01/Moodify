import React from 'react'
import FaceExpression from '../../Expression/components/FaceExpression'
import Player from '../components/Player'
import { useSong } from '../hooks/useSong'
import './home.scss'

const Home = () => {

    const { handleGetSong } = useSong()

    return (
        <div className="home">
            <div className="home__content">
                <header className="home__header">
                    <h1>Mood Detection Audio</h1>
                    <p>Discover music that matches your current expression.</p>
                </header>
                
                <FaceExpression
                    onClick={(expression) => { handleGetSong({ mood: expression }) }} />
            </div>
            
            <Player />
        </div>
    )
}

export default Home