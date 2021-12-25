import React from 'react'
import logo from '../images/logo.png'

function Navbar() {
    return (
        <div className="h-20 bg-transparent w-screen fixed">
            <div className="flex items-center justify-space h-full px-5">
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}

export default Navbar
