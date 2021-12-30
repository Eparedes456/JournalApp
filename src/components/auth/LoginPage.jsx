import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <div>
                <h3 className='auth__title'>Login</h3>
                <form>
                    <input type="text"  placeholder='email' name='Email' className='auth__input' autoComplete='off'/>
                    <input type="password"  placeholder='password' name='password'className='auth__input'/>
                    <button className='btn btn-primary btn-block' type='submit'>Login</button>
                    <br />
                    

                    <div className='auth__social-networks'>
                        <p>Login with social network</p>
                        <div className='google-btn'>
                            <div className='google-icon-wrapper'>
                                <img className='google-icon' src='https://www.shareicon.net/data/256x256/2017/04/11/883742_search_512x512.png'/>
                            </div>
                            <p className='btn-text'>
                                <b>Sign in with Google</b>
                            </p>
                            <p>Hola mundo</p>
                        </div>

                    </div>

                    <Link to="/auth/register" className='link'>
                        Crear nueva cuenta
                    </Link>

                </form>

                
        </div>
    )
}
