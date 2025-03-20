import React from 'react';
import './MainPage.css';

const MainPage = () => {
  console.log('MainPage rendered');
  return (

        <div className="main-page container">
          <h1 className="title">QARAQALPAQ KKM</h1>
          <p className="description">
          Твой надежный партнер в сфере кассовых аппаратов.
          </p>
        </div>
      );
  };

export default MainPage;