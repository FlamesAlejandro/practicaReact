import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="./"> Home </a>
                </li>
                <li>
                    <a href="./about"> About </a>
                </li>
                <li>
                    <a href="./login"> Login </a>
                </li>
            </ul>
        </nav>
    )
}
