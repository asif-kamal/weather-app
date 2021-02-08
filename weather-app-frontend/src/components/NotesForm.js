import React, { useState } from 'react';


const NotesForm = props => {

    const [note, setNote] = useState(props.initialFormState); 

    const handleInputChange = event => {
        const {name, value} = event.target
        setNote({...note, [name]: value})
    };

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (!note.content || (!note.city)) return;
            props.addNote(note) 
            setNote(props.initialFormState)
        }}>
            <label><h1>Write a note about the weather</h1></label>
            <input type="text" name="content" value={note.content} onChange={handleInputChange} ></input>
            <label>City:</label>
            <input type="text" name="city" value={note.city} onChange={handleInputChange} ></input>
            <button>Create Note!</button>
        </form>
    )
}

export default NotesForm;