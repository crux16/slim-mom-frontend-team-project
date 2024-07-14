import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
      <Footer />
    </div>
  );
};
