import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dailyRate } from 'redux/dailyRate/dailtyRateOperations';
import { ModalOverlay, useDisclosure } from '@chakra-ui/react';
import ModalWindow from 'components/Modal/Modal';
import CalculatorСalorieForm from '../../components/CalculatorСalorieForm/CalculatorСalorieForm';
import { getDataUser } from 'redux/dailyRate/dailyRateSlice';
import styles from './HomePage.module.css'; // Import CSS module

const HomePage = () => {
  const dispatch = useDispatch();

  // Modal window
  const OverlayOne = () => (
    <ModalOverlay className={styles.overlay} />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Form
  const [heightUser, setHeightUser] = useState(null);
  const [ageUser, setAgeUser] = useState(null);
  const [currentWeightUser, setCurrentWeightUser] = useState(null);
  const [desiredWeightUser, setDesiredWeightUser] = useState(null);
  const [bloodTypeUser, setBloodTypeUser] = useState(1);
  const [renderAlert, setRenderAlert] = useState(false);
  const [showValidationInput, setShowValidationInput] = useState(false);
  const [blurOnInput, setBlurOnInput] = useState(false);

  const handleChange = e => {
    const name = e.target.name;
    const value = Number(e.target.value);
    setRenderAlert(false);
    switch (name) {
      case 'heightUser':
        setHeightUser(value);
        break;
      case 'ageUser':
        setAgeUser(value);
        break;
      case 'currentWeightUser':
        setCurrentWeightUser(value);
        break;
      case 'desiredWeightUser':
        setDesiredWeightUser(value);
        break;
      case 'bloodTypeUser':
        setBloodTypeUser(value);
        break;
      default:
        break;
    }
  };

  const handleInputBlur = () => {
    setBlurOnInput(false);
  };

  const dataUser = {
    weight: currentWeightUser,
    height: heightUser,
    age: ageUser,
    desiredWeight: desiredWeightUser,
    bloodType: bloodTypeUser,
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validation inputs
    setShowValidationInput(true);
    setBlurOnInput(true);

    // Validation form
    setRenderAlert(false);
    const isEmptyField = Object.values(dataUser).some(
      item => item === 0 || item === null
    );
    if (isEmptyField) {
      setRenderAlert(true);
      setTimeout(() => {
        setRenderAlert(false);
      }, 3500);
      return;
    }

    if (
      heightUser < 140 ||
      heightUser > 220 ||
      ageUser < 16 ||
      ageUser > 120 ||
      currentWeightUser < 40 ||
      currentWeightUser > 150 ||
      desiredWeightUser < 40 ||
      desiredWeightUser > 150
    ) {
      return;
    }

    // Submit
    dispatch(getDataUser(dataUser));
    dispatch(dailyRate(dataUser));
    setOverlay(<OverlayOne />);
    onOpen();
  };

  return (
    <>
      <div className={styles.bgImg} /> {/* Use className from HomePage CSS module */}
      <CalculatorСalorieForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleInputBlur={handleInputBlur}
        bloodTypeUser={bloodTypeUser}
        renderAlert={renderAlert}
        showValidationInput={showValidationInput}
        blurOnInput={blurOnInput}
        dataUser={dataUser}
      />
      <ModalWindow overlay={overlay} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default HomePage;
