import React from 'react';

const Form = (props) => {
    return (
        <form>
            <label>
            City
            <input type="text" name="city" />
        </label>
        <input type="submit" value="Submit" />
        </form>
    )
}