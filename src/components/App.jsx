import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import HealthHome from 'pages/HealthHome/HealthHome';
import HealthCalculator from 'pages/HealthCalculator/HealthCalculator';
import HealthDiary from 'pages/HealthDiary/HealthDiary';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HealthHome />} />
        <Route path="/diary" element={<HealthDiary />} />
        <Route path="/calculator" element={<HealthCalculator />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>
    ),
    {
      basename: '/slim-mom-frontend-team-project',
    }
  );

  return <RouterProvider router={router} />;
};
