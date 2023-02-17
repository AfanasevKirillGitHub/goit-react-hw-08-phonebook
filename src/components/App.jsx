
import HomePage from 'pages/HomePage/HomePage';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path='/contacts' element={<Phonebook />} />
      </Routes>
    </Layout>
  );
};

