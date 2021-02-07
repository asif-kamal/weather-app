import React, { useState, useEffect } from 'react';
import NotesForm from './NotesForm';



const NotesList = props => {

    const initialFormState = {
        content: '',
        city: ''
    }

    
    useEffect(() => {
        fetch ('/api/v1/notes').then((response) => response.json())
        .then(data => setNotes(data))
    }, []);

    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        body: JSON.stringify({
            note:{
                content: note.content,
                city: note.city
            }
        }),
    };

    fetch('/api/v1/notes', config).then(res=>( console.log(res)))
    .catch( error => console.log(error))

    
    setNotes([...notes, note]);
    };
    




 return (
     <div>
         <div>
         <NotesForm addNote={addNote} initialFormState={initialFormState}/>
         </div>
         <div className="notes-list">
             {notes.map((note, index) => (
                 <div key={index}>
                     {note.content} | {note.created_at} | {note.city}
                     </div>
             ))}
         </div>
     </div>
 )
}

export default NotesList;

// createItem = (data) => {
//     const config = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//     body: JSON.stringify(data),
// };
// return fetch(`${this.BACKEND_URL}/items`, config).then((res) => res.json());
// };

// // }
