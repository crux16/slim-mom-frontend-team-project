import { NavLink } from 'react-router-dom';
import { Divider, Flex, Link, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
// import { authSelectors } from 'redux/auth/authSelectors';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio'; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  // const userName = useSelector(authSelectors.userName);
  const handleLogout = () => {
    Confirm.show(
      'Logout',
      `Are you sure you want to logout?`,
      'Yes',
      'No',
      () => {
        // If user clicks 'Yes', proceed with the deletion
        
        Notify.success(`Thank you for coming!`, { position: 'center-top' });
        dispatch(logOut());
      },
      () => {
        // If user clicks 'No', do nothing
        Notify.info('Logout canceled.', { position: 'center-top' });
      }
    );
  };
  const getStyle = ({ isActive }) =>
    isActive ? { color: '#212121' } : { color: '#9B9FAA' };

  return (
    <Flex alignItems="center" gap="15px">
      <Text fontFamily="secondary" fontWeight="700">
        {user.email}
        {/* <p>Welcome, {user.email}</p> */}
      </Text>
      <Divider orientation="vertical" h="32px" w="1px" bgColor=" #E0E0E0" />
      <Link
        _hover={{ textDecor: 'none' }}
        fontFamily="secondary"
        fontSize="14px"
        as={NavLink}
        to="/"
        pt="1"
        onClick={handleLogout}
        style={getStyle}
        fontWeight="700"
      >
        EXIT
      </Link>
    </Flex>
  );
};

// export default UserMenu;
