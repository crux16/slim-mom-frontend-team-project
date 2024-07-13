import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e, values) => {
    e.preventDefault();
    console.log(values); // Form values
    dispatch(register(values));
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form className={css.form} autoComplete="off">
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
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && !!errors.name}
            helperText={touched.name && errors.name}
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
        </Form>
      )}
    </Formik>
  );
};