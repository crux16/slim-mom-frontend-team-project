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

// import css from './Modal.module.css';
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

  return (
    <div >
      <div >
        <button  onClick={closeModal}>
          <MdClose />
        </button>
        <h1 >
          Your recommended daily calorie intake is
        </h1>
        <p >
          X <span >KCal</span>
        </p>
        <div >
          <h2 >
            Foods you should not eat
          </h2>
          <ol >
            {/* {notAllowedProducts.map((item, index) => (
              <li className={css.modalProhibitedFoodItem} key={index}>
                {index + 1}. {item}
              </li>
            ))} */}
            <li >List Number 1</li>
          </ol>
        </div>
        <button>Start Losing Weight</button>
      </div>
    </div>
  );
}
export default Modal;
