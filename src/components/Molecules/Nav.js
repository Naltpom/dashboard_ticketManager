import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom'
import  './Nav.scss'

const Nav = () => {

    return (
        <nav className="navBox">
            <Link push to="/"></Link>
            <Link push to="/login">login<br/></Link>
            <Link push to="/register">register<br/></Link>
            <Link push to="/dashboard">dashoard<br/></Link>
        </nav>
    )
}

export default Nav;
