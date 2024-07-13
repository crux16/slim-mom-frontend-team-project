import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';
import CalculatorForm from 'components/CalculatorForm/CalculatorForm';
// import Modal from '../../components/Modal/Modal';
// import { useState } from 'react';
// import { ModalOverlay, useDisclosure } from '@chakra-ui/react';
const HomePage = () => {
  //MODAL
  // const [openModal, setOpenModal] = useState(true);
  // const displayModal = () => {
  //   setOpenModal(true);
  // };
  // const closeModal = () => {
  //   setOpenModal(false);

  // };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Slim Mom</title>
      </Helmet>
      <section className={css.container}>
        <div className={css.bgGrayVector}></div>
        <div className={css.bgBanana}></div>
        <div className={css.bgStrawBerry}></div>
        <div className={css.bgLeaves}></div>
        <h1 className={css.title}>
          Calculate your daily calorie intake right now
        </h1>
        <CalculatorForm />
      </section>
    </HelmetProvider>
  );
};
export default HomePage;
