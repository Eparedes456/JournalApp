import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
    return (
        <div>
        <h3 className='auth__title'>Register a new account</h3>
        <form>
            <input type="text"  placeholder='nombre' name='Nombre' className='auth__input' autoComplete='off'/>   
            <input type="text"  placeholder='email' name='Email' className='auth__input' autoComplete='off'/>
            <input type="password"  placeholder='password' name='password'className='auth__input'/>
            <input type="password"  placeholder='Confirm password' name='password'className='auth__input'/>
            <button className='btn btn-primary btn-block' type='submit'>Register</button>
            <br />
        
            <br />
            <Link to="/auth/login" className='link'>
                Already registered?
            </Link>

        </form>

        
</div>
    )
}
