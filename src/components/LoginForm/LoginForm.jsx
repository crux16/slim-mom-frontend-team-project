import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e, values) => {
    e.preventDefault();
    console.log(values); // Form values
    dispatch(logIn(values));
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form className={css.form} autoComplete="off">
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
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
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
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
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
              onClick={(e) => handleSubmit(e,values)}
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
        </Form>
      )}
    </Formik>
  );
};