import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute/PublicRoute';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/authOperations';
import 'react-toastify/dist/ReactToastify.css';


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CalculatorPage = lazy(() => import('../pages/CalculatorPage/CalculatorPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));

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
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/calculator" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/calculator" component={<LoginPage />} />
          }
        />
        <Route
         path="/diary"
         element={
          <PrivateRoute component={<DiaryPage />} redirectTo="/login" />
         }
         />
         <Route
         path="/calculator"
         element={
          <PublicRoute component={<CalculatorPage />} redirectTo="/login" />
        }
        />
        <Route
        path="/logout"
        element={
          <PrivateRoute component={HomePage} redirectTo='/login' />
        }
        />
      </Route>
    </Routes>
  );
};
