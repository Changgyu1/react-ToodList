import React from 'react';
import 배너 from '../img/해달2.jpg';

function Header(){
    return(
        
        <header>
            <h1>My WebSite</h1>
            
            <nav>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;