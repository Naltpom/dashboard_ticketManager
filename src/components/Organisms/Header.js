import React, { Component } from 'react'
import Nav from '../Molecules/Nav'

const Header = ({dashboard}) => {


    if (dashboard) {
        return (
            <header>
                dashboard
            </header>
        )
    }

    return (
        <header>
            <Nav />
        </header>
    )
}

export default Header;
