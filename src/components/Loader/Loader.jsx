import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.container}>
      <ClipLoader color="#FFA500" size={130} />
    </div>
  );
};
