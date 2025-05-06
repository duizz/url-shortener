import { nanoid } from "nanoid"
import { Url } from "../models/Url.js"

export const shortUrl = async (req, res) => {
    try {
        const host = 'bit.ly'
        const { url: originalUrl } = req.body

        if (!originalUrl) {
            return res.status(404).json({ erro: "URL is required!" })
        }
        const shortCode = nanoid(6)

        await Url.create({
            originalUrl,
            shortCode
        })

        return res.status(200).json({ "url": `${host}/${shortCode}` })
    } catch (error) {
        return res.status(500).json({ erro: `Error in short url route! ${error}` })
    }
}

export const redirectUrl = async (req, res) => {
    try {
        const { id: _id } = req.params
        const url = await Url.findOne({ _id })

        if (!url) {
            return res.status(404).json({ erro: "Url not found on database!" })
        }

        return res.status(200).redirect(url.originalUrl)
    } catch (error) {
        return res.status(500).json({ erro: `Error in redirect url! ${error}` })
    }
}