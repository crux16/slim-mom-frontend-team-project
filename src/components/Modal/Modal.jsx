import css from './Modal.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import CalculatorForm from 'components/CalculatorForm/CalculatorForm';


import {
  getCalculatorDailyRate,
} from 'redux/user/userSelectors';

function Modal({ closeModal }) {
  const dailyRate = useSelector(getCalculatorDailyRate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/RegisterPage');
    dispatch(getCalculatorDailyRate(null));
  };
  // const [age, setAge] = useState(0);
  // const [height, setHeight] = useState(0);
  // const [currentWeight, setCurrentWeight] = useState(0);
  // const [desiredWeight, setDesiredWeight] = useState(0);
  // const [dailyRate, setDailyRate] = useState('Computing...');

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape');
      closeModal();
    };


    window.addEventListener('keydown', handleKeyDown);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = 'auto';
    };
    
  }, [closeModal]);

    // const calculateDailyRate = () => {
    // const bmr = 10 * currentWeight + 6.25 * height - 5 * age - 161;

    // const activityFactor = 1.2;

    // const calories = Math.round(bmr * activityFactor);
    // setDailyRate(calories);
    // };

  return (
    <div>
      <div className={css.modalBackground} onClick={closeModal}>
      </div>
      <div className={css.modalContainer}>
        <h1 className={css.modalHeader}>
          Your recommended daily calorie intake is
        </h1>
        {/* <p className={css.modalTotalCalories}><span className={css.modalCaloriesLabel}>KCal</span>
        </p> */}
        <p className={css.modalTotalCalories}>
        {dailyRate} <span className={css.modalCaloriesLabel}>KCal</span>
        </p>
        <div className={css.modalProhibitedFoodContainer}>
          <h2 className={css.modalProhibitedFoodTitle}>
            Foods you should not eat
          </h2>
          <ol className={css.modalProhibitedFoodList}>

            <li className={css.modalProhibitedFoodItem}>List Number 1</li>
          </ol>
        </div>
        {/* <button onClick = {calculateDailyRate} className={css.modalStartBtn} >Start Losing Weight</button> */}
        <button onClick={handleClick} className={css.modalStartBtn} >Start Losing Weight</button>
      </div>
    </div>
  );
}
export default Modal;