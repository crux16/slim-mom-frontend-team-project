import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import Loader from 'components/Loader/Loader';

const LoginPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      <Loader />
    </HelmetProvider>
  );
};

export default LoginPage;
