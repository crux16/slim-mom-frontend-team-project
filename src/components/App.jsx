<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import { Outlet, Route, Routes } from 'react-router-dom';
import {refreshUser } from '..//redux/auth/authOperations';
import Header from './Header/Header';
import Loader from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRestrictedRoute from './PublicStrictedRoute/PublicRestrictedRoute';
import NotFound from '../pages/NotFound/NotFound';
import { useAuth } from '../hooks/useAuth';

const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const LogInPage = lazy(() => import('../pages/LogInPage/LogInPage'));
const CalculatorPage = lazy(() =>
  import('../pages/CalculatorPage/CalculatorPage')
);
const RegistrationPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage')
);
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const UiKit = lazy(() => import('./UiKit/UiKit'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Container
      maxW={{ sm: '768px', md: '1280px' }}
      position="relative"
      pt={{ xs: '80px', lg: '151px' }}
      px={{ xs: '16px', md: '32px', lg: '16px' }}
    >
      <Header />
      {/* <Loader /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route
              index
              element={
                <PublicRestrictedRoute
                  redirectTo="/calculator"
                  children={<HomePage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <PublicRestrictedRoute
                  redirectTo="/calculator"
                  children={<LogInPage />}
                />
              }
            />
            <Route
              path="registration"
              element={
                <PublicRestrictedRoute
                  redirectTo="/calculator"
                  children={<RegistrationPage />}
                />
              }
            />
            <Route
              path="calculator"
              element={
                <PrivateRoute redirectTo="/" children={<CalculatorPage />} />
              }
            />
            <Route
              path="diary"
              element={
                <PrivateRoute redirectTo="/login" children={<DiaryPage />} />
              }
            />
            <Route path="uikit" element={<UiKit />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
=======
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import CalculatorPage from 'pages/CalculatorPage/CalculatorPage';
import HomePage from 'pages/HomePage/HomePage';
import DiaryPage from 'pages/DiaryPage/DiaryPage';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="diary" element={<DiaryPage />} />
      </Route>
    ),
    {
      basename: '/slim-mom-frontend-team-project',
    }
>>>>>>> 4b816a06149fc85aed50d29f8a190e43ed188f5f
  );

  return <RouterProvider router={router} />;
};
