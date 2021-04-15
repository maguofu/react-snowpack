import React, {useState, useEffect} from 'react';
import logo from './assets/logo.svg';
import style from './App.module.css';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  useEffect(() => {
    fetch('/omsdata/company/deliverarea').then(res=>{
      console.log(res);
    })
  }, []);
  // Return the App component.
  return (
    <div className={style.App}>
      <header className={style['App-header']}>
        <img src={logo} className={style['App-logo']} alt="logo" />
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
      </header>
    </div>
  );
}

export default App;