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
  );

  return <RouterProvider router={router} />;
};
