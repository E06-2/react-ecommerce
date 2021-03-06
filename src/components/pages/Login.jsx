import React, { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import Logo from '../Logo';

const Login = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const { loginData, changeHandler, loginHandler, formData, error } = context;

  const userNameRef = useRef();

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  useEffect(() => {
    loginData.success && navigate('/products');
  }, [loginData.success, navigate]);

  return (
    <main>
      <Logo />
      <section className='login-page'>
        <h2>
          Please enter your login details
          <form>
            <input
              type='text'
              ref={userNameRef}
              name='userName'
              placeholder='Enter your name'
              value={formData.userName}
              onChange={(e) => changeHandler(e)}
            />
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={(e) => changeHandler(e)}
            />
            <button onClick={(e) => loginHandler(e)}>Login</button>
          </form>
        </h2>
        {/* {loginData.success ? (
          navigate('/products', { replace: true })
        ) : (
          <aside className='aside-errors'>
            <p>{error.error}</p>
          </aside>
        )} */}
        {error.error && (
          <aside className='aside-errors'>
            <p>{error.error}</p>
          </aside>
        )}
      </section>
    </main>
  );
};

export default Login;
