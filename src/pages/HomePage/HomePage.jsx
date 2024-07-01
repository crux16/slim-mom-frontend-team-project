import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Slim Moms</title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.title}>
          Calculate your daily calorie intake right now
        </h1>
        <form>
          <div>
            <label htmlFor="">
              <input type="number" />
              <span className={css.name}>Height*</span>
            </label>
            <label htmlFor="">
              <input type="number" />
              <span className={css.name}>Desired Weight*</span>
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input type="number" />
              <span className={css.name}>Age*</span>
            </label>
            <label htmlFor="">
              <input type="text" />
              <span className={css.name}>Blood Type*</span>
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input type="number" />
              <span className={css.name}>Current Weight*</span>
            </label>
            <label htmlFor="">
              <input type="radio" />
              <span>1</span>
            </label>
            <label htmlFor="">
              <input type="radio" />
              <span>2</span>
            </label>
            <label htmlFor="">
              <input type="radio" />
              <span>3</span>
            </label>
            <label htmlFor="">
              <input type="radio" />
              <span>4</span>
            </label>
          </div>
          <button type="submit" className={css.button}>
            Start losing weight
          </button>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
