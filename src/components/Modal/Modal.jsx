<<<<<<< HEAD
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Divider,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react';

import MainButton from 'components/Button/MainButton';
import LogoSmall from 'components/Logo/SmallLogo';

import {
  getDailyRate,
  getIsLoading,
  getNotAllowedProducts,
} from 'redux/dailyRate/dailyRateSelectors';

import { useNavigate } from 'react-router-dom/dist';
import GrayBar from 'components/GrayBar/GrayBar';
import Loader from 'components/Loader/Loader';
import styles from './Modal.module.css'; // Import CSS module

const ModalWindow = ({ overlay, isOpen, onClose }) => {
  const dailyRate = useSelector(getDailyRate);
  const isLoading = useSelector(getIsLoading);
  const notAllowedProducts = useSelector(getNotAllowedProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/registration');
    dispatch(getDailyRate(null));
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ xs: 'full', md: '2xl' }}
      >
        {overlay}
        <ModalContent className={styles.modalContent}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="20px"
          >
            <LogoSmall />
            <Box display={{ md: 'none' }}>
              <Link
                _hover={{ textDecoration: 'none' }}
                fontFamily="-moz-initial"
                fontSize="14px"
                as={NavLink}
                to="/login"
                mr="16px"
              >
                SIGIN IN
              </Link>
              <Link
                _hover={{ textDecoration: 'none' }}
                fontFamily="-moz-initial"
                fontSize="14px"
                as={NavLink}
                to="/registration"
              >
                REGISTRATION
              </Link>
            </Box>
          </Box>
          {isOpen && <GrayBar onClick={onClose} />}
          <Box maxW="409px" mx="auto">
            <ModalHeader className={styles.modalHeader}>
              Your recommended daily calorie intake is
            </ModalHeader>
          </Box>
          <ModalCloseButton
            size="sm"
            className={styles.modalCloseButton}
            display={{ xs: 'none', md: 'block' }}
          />
          <ModalBody className={styles.modalBody}>
            <Box className={styles.loaderContainer}>
              {isLoading ? (
                <Loader height={20} width={20} />
              ) : (
                <>
                  <Box display="flex" justifyContent="center">
                    <Text
                      as="b"
                      fontSize="48px"
                      display="flex"
                      alignItems="baseline"
                      justifyContent="center"
                      color="#264061"
                    >
                      {dailyRate}
                      <Text fontSize="24px" ml="1">
                        kcal
                      </Text>
                    </Text>
                  </Box>

                  <Divider
                    w={{ xs: 'none', md: '330px' }}
                    mx="auto"
                    className={styles.divider}
                  />
                  <Box
                    position="relative"
                    w={{ xs: 'none', md: '330px' }}
                    mx="auto"
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Text
                      as={'h3'}
                      color="#212121"
                      textAlign="center"
                      w="100%"
                      mt="12px"
                      mb="20px"
                    >
                      Foods you should not eat
                    </Text>
                    <div className={styles.topGradient} />
                    <ul className={styles.list}>
                      {notAllowedProducts.map((item, index) => (
                        <li key={index}>
                          {index + 1}. {item}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.bottomGradient} />
                  </Box>
                </>
              )}
            </Box>
          </ModalBody>
          <ModalFooter className={styles.modalFooter}>
            <MainButton text="Start losing weight" onClick={handleClick} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
=======
const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
>>>>>>> 4b816a06149fc85aed50d29f8a190e43ed188f5f
