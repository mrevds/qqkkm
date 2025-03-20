import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Удалите BrowserRouter
import MainPage from './components/MainPage';
import HelpPage from './components/HelpPage';
import ContactsPage from './components/Contacts';
import Header from './components/Header';
import Features from './components/Features';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import OrionProduct from './components/OrionProduct';
import MercuryProduct from './components/MercuryProduct';


const AppRouter = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPage />
              <ProductList />
              <Features />
              <Footer />
            </>
          }
        />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/orion100fuz" element={<OrionProduct />} />
        <Route path="/mercury115fuz" element={<MercuryProduct />} />
        
      </Routes>
    </>
  );
};

export default AppRouter;