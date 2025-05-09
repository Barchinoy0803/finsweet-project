import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { pagesList } from '../../constants'
import logo from "../../assets/images/logo.svg"
import "./style.scss"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container page__options'>
                <Link to={"/"}>
                    <img src={logo} alt="" />
                </Link>
                <ul className>
                    {
                        Object.entries(pagesList).map(([key, value]) => (
                            <li>
                                <NavLink className="navbar__link" to={`/${value}`}>
                                    {key}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar