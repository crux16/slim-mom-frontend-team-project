import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export const App = () => {
  //   const dispatch = useDispatch();
  //   const { isRefreshing } = useAuth();

  //   useEffect(() => {
  //     dispatch(refreshUser());
  //   }, [dispatch]);

  return (
    // isRefreshing ? (
    //   <b>Refreshing user...</b>
    // ) :
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* /* <Route index element={<HomePage />} /> */}
        {/* <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        /> */}
        {/* <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        /> */}
        {/* <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        /> */}
        */ //{' '}
      </Route>
    </Routes>
  );
};
