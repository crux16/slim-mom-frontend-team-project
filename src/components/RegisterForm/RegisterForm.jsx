import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { register, logIn } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(logIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    dispatch(register(data));
    form.reset();
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.h2}>Register</h2>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="standard"
        placeholder="Name"
        className={css.input}
        type="text"
        color="warning"
        required
      />
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
          Register
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
          onClick={handleLoginClick}
        >
          Log in
        </Button>
      </div>
    </form>
  );
};
