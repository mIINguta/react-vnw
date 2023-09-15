import React from 'react';
import "./HeaderStyle.css"

export default function Header(){
    return(
        <>
        <header>
            <p>My React Project</p>
            <nav>
                <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">SOBRE</a></li>
                <li><a href="">CONTATO</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}