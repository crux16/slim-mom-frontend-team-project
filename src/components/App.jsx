import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
// import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/authOperations';

const CalculatorPage = lazy(() =>
  import('../pages/CalculatorPage/CalculatorPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<CalculatorPage />} />
        <Route
          path="/register"
          element={
            <RegisterPage />
            // <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage />
            // <RestrictedRoute redirectTo="/" component={<LoginPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
