import React from 'react'
import user from '../img/user-solid.svg'

const Header = () => {
    return (
        <div className="header">
            <h1>Bazar</h1>
            <img src={user} alt="" />
        </div>
    )
}

export default Header
