import express from 'express';
export class NoteController {
    createNote = (req, res) => {
        res.send('Creating note');
    };
}
