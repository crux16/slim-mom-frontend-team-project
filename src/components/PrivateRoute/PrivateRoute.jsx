import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn } = useAuth();
    const shouldRedirect = !isLoggedIn;

    return shouldRedirect ? <Component /> : <Navigate to={redirectTo} />;
};