import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import Loader from 'components/Loader/Loader';

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
      <Loader />
    </HelmetProvider>
  );
};

export default RegisterPage;
