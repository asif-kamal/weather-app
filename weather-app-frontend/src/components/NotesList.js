import React, { useState, useEffect } from 'react';



const NotesList = props => {



const [notes, setNotes] = useState([]);

useEffect(() => {
    fetch ('/api/v1/notes').then((response) => response.json())
    .then(data => setNotes(data))
})

 return (
     <div>
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

// }
