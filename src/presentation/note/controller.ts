import express from 'express'
import { NoteDto } from '../../domain/dtos/note.dto.ts'
import { NoteEntity } from '../../domain/entities/noteEntity.ts'

export class NoteController {

    createNote = ( req: express.Request, res: express.Response ) => {

        const { title, content, date, ownerId } = req.body

        const note = NoteDto.create(
            new NoteEntity( title, content, date, ownerId )
        )

        res.json({
            data: {
                note
            }
        })
    }
}