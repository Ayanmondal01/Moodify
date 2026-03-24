const songModel = require("../models/song.model")
const storageService = require('../services/storage.service')
const id3 = require("node-id3")

async function uploadSong(req, res) {

    const songBuffer = req.file.buffer
    const { mood } = req.body

    const tags = id3.read(songBuffer)

    const [songFile, posterFile] = await Promise.all([
        storageService.uploadFile({
            buffer: songBuffer,
            filename: tags.title + ".mp3",
            folder: "/modify/songs"
        }),
        storageService.uploadFile({
            buffer: tags.image.imageBuffer,
            filename: tags.title + ".jpeg",
            folder: "/modify/posters"
        })
    ])

    const song = await songModel.create({
        title: tags.title,
        url: songFile.url,
        posterUrl: posterFile.url,
        mood
    })

    res.status(201).json({
        message: "Song created successfully",
        song
    })

}

async function getSong(req, res) {
    const { mood } = req.query

    if (!mood) {
        return res.status(400).json({
            message: "Mood is required",
            song: null
        })
    }

    const song = await songModel.findOne({
        mood: new RegExp(`^${mood}$`, "i"),
    })

    if (!song) {
        return res.status(404).json({
            message: `No song found for mood ${mood}`,
            song: null
        })
    }

    res.status(200).json({
        message: "Song fetched successfully.",
        song
    })
}
module.exports = { uploadSong, getSong }