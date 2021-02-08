import React from 'react';
import NotesList from '../components/NotesList';
import Header from '../components/Header'


function NotesListContainer() {
    return(
        <div className="notes-list-container">
            
            <NotesList />
            
        </div>
    )
}
export default NotesListContainer;