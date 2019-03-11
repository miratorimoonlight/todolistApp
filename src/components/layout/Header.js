import React from 'react';
import {Link} from 'react-router-dom';

function Header()
{
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/todolistApp/">Home</Link> |  {' '}
            <Link style={linkStyle} to="/todolistApp/about">About</Link>
        </header>    
    )
}

const headerStyle = {
    background:'#659dbd',
    padding:'2%',
    color:'#eee',
    
}

const linkStyle ={
    color:"#eee",

}

export default Header;