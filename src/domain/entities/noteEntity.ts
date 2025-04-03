

export class NoteEntity {
    title: string
    content: string
    date: Date
    ownerId: string

    constructor(title: string, content: string, date: Date, ownerId: string) {
        this.title = title
        this.content = content
        this.date = date
        this.ownerId = ownerId
    }
}