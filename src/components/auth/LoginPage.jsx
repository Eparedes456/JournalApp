import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'

export const LoginPage = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange] = useForm(
        {
            email:'erickparedes456@gmail.com',
            password:'456'
        }
    )

    
    const { email,password } = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();

        dispatch(login(12345,'Erick'));
       
    }

    return (
        <div>
                <h3 className='auth__title'>Login</h3>
                <form onSubmit={ handleLogin }>
                    <input type="text"  placeholder='email' name='Email' className='auth__input' autoComplete='off' value={email} onChange={handleInputChange}/>
                    <input type="password"  placeholder='password' name='password'className='auth__input' value={password} onChange={handleInputChange} />
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
