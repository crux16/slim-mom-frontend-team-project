import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    dispatch(logIn(data));
    form.reset();
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.h2}>Log In</h2>
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="standard"
        placeholder="Email"
        className={css.input}
        type="email"
        color="warning"
        required
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        variant="standard"
        placeholder="Password"
        className={css.input}
        type="password"
        color="warning"
        required
      />
      <div className={css.button_container}>
        <Button
          variant="contained"
          color="warning"
          type="submit"
          size="small"
          sx={{
            borderRadius: '30px',
            textTransform: 'capitalize',
            padding: '6px 40px',
            letterSpacing: '1px',
            fontWeight: 'bold',
            fontSize: '18px',
          }}
        >
          Log In
        </Button>
        <Button
          variant="outlined"
          color="warning"
          type="button"
          size="small"
          sx={{
            borderRadius: '30px',
            textTransform: 'capitalize',
            padding: '6px 40px',
            letterSpacing: '1px',
            fontWeight: 'bold',
            fontSize: '18px',
          }}
          onClick={handleRegisterClick}
        >
          Register
        </Button>
      </div>
    </form>
  );
};
