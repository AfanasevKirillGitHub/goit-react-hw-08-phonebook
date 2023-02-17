import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from './AuthRoutes/PublicRoute';
import { PrivateRoute } from './AuthRoutes/PrivateRoute';

import { refreshUser } from 'redux/auth/authThunk';

import { Loader } from './Loader/Loader';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const Phonebook = lazy(() => import('../pages/Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PrivateRoute redirectTo="/contacts" component={<Registration />} />
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PublicRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
};
