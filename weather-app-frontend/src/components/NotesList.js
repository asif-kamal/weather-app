import React, { useState, useEffect } from 'react';

const NotesList = props => {

useEffect(() => {
    fetch (`${this.BACKEND_URL}/items`).then((response) => response.json())
}

getAllItems = () => fetch (`${this.BACKEND_URL}/items`).then((response) => response.json())



createItem = (data) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    body: JSON.stringify(data),
};
return fetch(`${this.BACKEND_URL}/items`, config).then((res) => res.json());
};

}
