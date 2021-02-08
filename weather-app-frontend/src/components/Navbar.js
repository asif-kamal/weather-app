import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return(
        <div>
        <Link to={"/notes"}>Notes on the Weather</Link>
                    ||  
        <Link to={"/about"}>About</Link>
        </div>
    );
}

export default Navbar;