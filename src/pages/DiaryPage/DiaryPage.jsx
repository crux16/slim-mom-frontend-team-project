import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { LoginForm } from 'components/LoginForm/LoginForm';

const DairyPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {/* <LoginForm /> */}
    </HelmetProvider>
  );
};

export default DairyPage;
