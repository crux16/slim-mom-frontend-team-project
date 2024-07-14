import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import CalculatorForm from 'components/CalculatorForm/CalculatorForm';
import Loader from '../../components/Loader/Loader';
// import { ModalOverlay, useDisclosure } from '@chakra-ui/react';
const HomePage = () => {
  //MODAL

  const [openModal, setOpenModal] = useState(false);
  const displayModal = () => {
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Slim Mom</title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.title}>
          Calculate your daily calorie intake right now
        </h1>
        <CalculatorForm displayModal={displayModal} />
        <Loader />
        {openModal && <Modal closeModal={closeModal} />}
      </div>
    </HelmetProvider>
  );
};
export default HomePage;
