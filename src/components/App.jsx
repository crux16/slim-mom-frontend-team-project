import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/authOperations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CalculatorPage = lazy(() =>
  import('../pages/CalculatorPage/CalculatorPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage/DiaryPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    // <b>Refreshing user...</b>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            // <LoginPage />
            <RestrictedRoute
              redirectTo="/calculator"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            // <RegisterPage />
            <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
          }
        />

        <Route
          path="/calculator"
          element={
            <PrivateRoute redirectTo="/diary" component={<CalculatorPage />} />
          }
        />
        <Route
          path="/diary"
          element={
            <PrivateRoute redirectTo="/login" component={<DiaryPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
