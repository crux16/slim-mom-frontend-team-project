import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
import { selectUser } from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component, redirectTo }) {
  const location = useLocation();
  const isLoggedIn = useSelector(selectUser);
  return isLoggedIn ? (
    component
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
}

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };
