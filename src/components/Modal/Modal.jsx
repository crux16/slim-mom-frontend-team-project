// import {
//   Box,
//   Divider,
//   Link,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   Text,
// } from '@chakra-ui/react';
// import GrayBar from '../GrayBar/GrayBar';

// import logo from 'assets/images/logo.png';

// const Modal = ({ children, isOpen, onClose }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         {children}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

import css from './Modal.module.css';
import { MdClose } from 'react-icons/md';
import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   getDailyRate,
//   getIsLoading,
//   getNotAllowedProducts,
// } from '../../redux/dailyRate/dailyRateSelectors';

function Modal({ closeModal, openModal }) {
  // const dailyRate = useSelector(getDailyRate);
  // const isLoading = useSelector(getIsLoading);
  // const notAllowedProducts = useSelector(getNotAllowedProducts);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const handleClick = () => {
  //   navigate('/registration');
  //   dispatch(getDailyRate(null));
  // };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape');
      onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className={css.modalBackground}>
      <div className={css.modalContainer}>
        <button className={css.modalCloseBtn} onClick={closeModal}>
          <MdClose />
        </button>
        <h1 className={css.modalHeader}>
          Your recommended daily calorie intake is
        </h1>
        <p className={css.modalTotalCalories}>
          X <span className={css.modalCaloriesLabel}>KCal</span>
        </p>
        <div className={css.modalProhibitedFoodContainer}>
          <h2 className={css.modalProhibitedFoodTitle}>
            Foods you should not eat
          </h2>
          <ol className={css.modalProhibitedFoodList}>
            {/* {notAllowedProducts.map((item, index) => (
              <li className={css.modalProhibitedFoodItem} key={index}>
                {index + 1}. {item}
              </li>
            ))} */}
            <li className={css.modalProhibitedFoodItem}>List Number 1</li>
          </ol>
        </div>
        <button className={css.modalStartBtn}>Start Losing Weight</button>
      </div>
    </div>
  );
}
export default Modal;
