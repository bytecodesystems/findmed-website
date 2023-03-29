import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import config from'../../../config.js'
import './Login.css'

export function Login() {
    const navigate = useNavigate()

    // handle login submit
    async function handleSubmit(event) {
        event.preventDefault()
        const api = config.API_URL
        
        // storing elements
        const username = document.querySelector('#user').value
        const password = document.querySelector('#password').value
        const span = document.querySelector('.output')

        // requiring to API
        await fetch(`${api}/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.validated === true) {
                    navigate('/findmed-website/search')
                }
                else {
                    span.innerHTML = 'Usuário ou senha inválida'
                }
            })
            .catch((error) => {
                console.error(error)
                span.innerHTML = 'Erro interno'
            })
    }

    return (
        <>
            <Header />
            
            <main className='login-page'>
                <section className="login-container">
                    <div className='illustration'>
                        <img src='assets/images/findmed-logo2.png' alt='findmed logo' />
                        <img src='assets/images/medic-illustration.png' alt='medic illustration' />
                        <p>Medicina Familiar</p>
                    </div>

                    <div className='login-section'>
                        <h1>Olá!</h1>
                        <h2>Bem vindo!</h2>

                        <div className='login-box'>
                            <h1>Entre na sua conta</h1>
                            <span className='output'></span>

                            <form className='login-form' method='POST' onSubmit={handleSubmit}>
                                <input id='user' name='user' type='text' required placeholder='Nome' />
                                <input id='password' name='password' type='password' required placeholder='Senha' />
                                <button type='submit'>Login</button>
                                <a href='#' className='forgot'>Esqueci a senha</a>
                            </form>

                            <a href='#'>Criar Conta</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
	)
}