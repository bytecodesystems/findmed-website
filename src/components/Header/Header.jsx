import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {

    // handle dropdown menu for mobile devices
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    // render
    return (
        <header>
            {/* HEADER FOR COMPUTER AND TABLETS */}
            <div className='header-computer limit-section'>
                <img src='assets/images/logo.svg' alt='logo findmed'/>

                <nav>
                    <a href='#'>Home</a>
                    <Link to='/findmed-website/search'>Pesquisar</Link>
                    <a href='#'>Contato</a>
                    <a href='#'>Sobre</a>
                    <Link to='/findmed-website/login' className='profile'></Link>
                </nav>
            </div>

            {/* HEADER FOR MOBILE DEVICES */}
            <div className="header-mobile">
                <img src='assets/images/logo.svg' alt='logo findmed'/>

                <div className="dropdown">
                    <button className="dropbtn" onClick={handleDropdownToggle}>Menu</button>

                    <div
                        className="dropdown-content"
                        style={{
                            display: isDropdownOpen ? 'block' : 'none',
                            animation: 'fadeIn 0.3s'
                        }}
                    >
                        <a href='#'>Home</a>
                        <Link to='/findmed-website/search'>Pesquisar</Link>
                        <a href='#'>Contato</a>
                        <a href='#'>Sobre</a>
                        <Link to='/findmed-website/login'>Logar</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}