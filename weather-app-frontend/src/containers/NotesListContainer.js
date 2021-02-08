import React from 'react';
import NotesList from '../components/NotesList';
import blinds from '../blinds.jpg'


function NotesListContainer() {
    return(
        <div className="notes-list-container">
            <img src={blinds} alt="light-from-window" />
            <NotesList />
            
        </div>
    )
}
export default NotesListContainer;