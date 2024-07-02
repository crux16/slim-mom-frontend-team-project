import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';

import style from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
    
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className={style.form_container}>
      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={style.h2}>Register</h2>
        <label className={style.label}>
          Name *
          <input className={style.input} type="text" name="name" />
        </label>
        <label className={style.label}>
          Email *
          <input className={style.input} type="email" name="email" />
        </label>
        <label className={style.label}>
          Password *
          <input className={style.input} type="password" name="password" />
        </label>
        <div className={style.button_container}>
          <button className={style.register_button} type="submit">
            Register
          </button>
          <button className={style.login_button} type="button" onClick={handleLoginClick}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};