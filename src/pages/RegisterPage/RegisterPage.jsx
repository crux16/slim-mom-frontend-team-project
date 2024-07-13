<<<<<<< HEAD
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from '..//../components/RegisterForm/RegisterForm';


const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </HelmetProvider>
  );
};

export default RegisterPage;
=======
import React from 'react';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
    </div>
  );
};

export default RegisterPage;
>>>>>>> 4b816a06149fc85aed50d29f8a190e43ed188f5f
