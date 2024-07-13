import css from './Modal.Module.css';
import { MdClose } from 'react-icons/md';
import { useEffect } from 'react';

function Modal({ closeModal, openModal }) {
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
            <li className={css.modalProhibitedFoodItem}>List Number 1</li>
          </ol>
        </div>
        <button className={css.modalStartBtn}>Start Losing Weight</button>
      </div>
    </div>
  );
}
export default Modal;
