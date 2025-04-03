import type { NoteEntity } from "../entities/noteEntity.ts"
import { CustomError } from "../errors/custom.error.ts"



export class NoteDto {
    private title: string
    private content: string
    private date: number
    private ownerId: string

    private constructor(title: string, content: string, date: number, ownerId: string) {
        this.title = title
        this.content = content
        this.date = date
        this.ownerId = ownerId
    }

    public static create(note: NoteEntity) {
        let { title, content, date, ownerId } = note

        if( !title ) throw CustomError.badRequest('Error creating note.')
        if( !content ) throw CustomError.badRequest('Error creating note.') 
        if( !ownerId ) throw CustomError.badRequest('Error creating note.')
        if( !date ) date = Date.now()

        return new NoteDto(title, content, date, ownerId)
    }
}