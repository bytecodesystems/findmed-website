import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {
    return (
			<header>
				<div className='header limit-section'>
					<img src='src/assets/images/logo.svg' alt='logo findmed' />

					<nav>
						<a href='#'>Home</a>
						<Link to='/findmed-website/search'>Pesquisar</Link>
						<a href='#'>Contato</a>
						<a href='#'>Sobre</a>
						<Link to='/findmed-website/login' className='profile'></Link>
					</nav>
				</div>
			</header>
		)
}