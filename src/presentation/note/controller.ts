import express from 'express'

export class NoteController {

    createNote = ( req: express.Request, res: express.Response ) => {
        res.send('Creating note')
    }
}