

export class NoteEntity {
    private title: string
    private content: string
    private date: Date
    private ownerId: string

    constructor(title: string, content: string, date: Date, ownerId: string) {
        this.title = title
        this.content = content
        this.date = date
        this.ownerId = ownerId
    }
}