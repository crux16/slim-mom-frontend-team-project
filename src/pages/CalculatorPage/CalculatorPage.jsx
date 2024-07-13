import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CalculatorForm from 'components/Calculator/Calculator';
import css from './CalculatorPage.module.css';

const CalculatorPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom - Calculator</title>
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

export default CalculatorPage;
