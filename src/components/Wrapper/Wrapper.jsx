import { Outlet } from 'react-router-dom';
// import { Header } from '../Header/Header';
import { Suspense } from 'react';
import css from './Wrapper.module.css';
import { Calculator } from 'components/Calculator/Calculator';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

export const Wrapper = () => {
  return (
    <div className={css.container}>
      {/* <Header/> */}
      {/* <section></section> <section className={css.container}></section> */}

      <Calculator />
      <RightSideBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
