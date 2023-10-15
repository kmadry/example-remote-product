import React from 'react';
import style from './App.module.css';
import Products from './components/products';

function App() {
  return (
    <div className={style.App}>
      <Products />
    </div>
  );
}

export default App;
