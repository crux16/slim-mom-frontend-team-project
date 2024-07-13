import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import css from './SharedLayout.module.css';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
