import React from 'react'
import './menu.scss'

function Menu({ menuOpen, setMenuOpen }) {
    const collapseMenu = () => {
        setMenuOpen(false)
    }
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul>
                <li onClick={collapseMenu}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={collapseMenu}>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li onClick={collapseMenu}>
                    <a href='#testimonials'>Testimonials</a>
                </li>
                <li onClick={collapseMenu}>
                    <a href='#works'>Works</a>
                </li>
                <li onClick={collapseMenu}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu