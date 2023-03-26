import './Login.css'
import { Header } from '../../components/Header/Header'

export function Login() {
    return (
        <>
            <Header />
            
            <main className='login-page'>
                <section className="login-container">
                    <div className='illustration'>
                        <img src='src/assets/images/findmed-logo2.png' alt='findmed logo' />
                        <img src='src/assets/images/medic-illustration.png' alt='medic illustration' />
                        <p>Medicina Familiar</p>
                    </div>

                    <div className='login-section'>
                        <h1>Olá!</h1>
                        <h2>Bem vindo!</h2>

                        <div className='login-box'>
                            <h1>Entre na sua conta</h1>
                            <span className='output'></span>

                            <form className='login-form' method='POST'>
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