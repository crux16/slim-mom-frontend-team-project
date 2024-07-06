import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/authOperations';

import style from './LoginForm.module.css';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };
    
  return (
    <div className={style.form_container}>
      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={style.h2}>Log In</h2>
        <label className={style.label}>
          Email *
          <input className={style.input} type="email" name="email" />
        </label>
        <label className={style.label}>
          Password *
          <input className={style.input} type="password" name="password" />
        </label>
        <div className={style.button_container}>
          <button className={style.login_button} type="submit">
            Log in
          </button>
          <button className={style.register_button} type="button" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};