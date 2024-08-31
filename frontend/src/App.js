import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Routes from './routes';

const App = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);
  const projectDisplayRef = useRef(null);

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const a = e.target[0].value;
    const b = e.target[1].value;
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/shortd/${a}/${b}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
    setDisplay(true);
    e.target[0].value = '';
    e.target[1].value = '';
  };

  useEffect(() => {
    if (display && projectDisplayRef.current) {
      projectDisplayRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [display]);

  return (
    <div className='mainContainer'>
      <div className='projectHeader'>Campus Rush</div>

      <div className='Maps'>
        <div className='satMap'></div>
        <div className='outMap'></div>
      </div>

      <div className='formInput'>
        <form method='post' onSubmit={onsubmitHandler} className='formGroup'>
          <div className='formRow'>
            <div className='sourceForm'>
              <label htmlFor='source'>Source</label>
              <input id='source' name='a' type='number' min={1} max={64} placeholder='Enter Source' className='sourceInput' required></input>
            </div>
            <div className='destinationForm'>
              <label htmlFor='destination'>Destination</label>
              <input id='destination' name='b' type='number' min={1} max={64} placeholder='Enter Destination' className='destinationInput' required></input>
            </div>
          </div>
          <button className='formButton'>Submit</button>
        </form>
      </div>

      <div className='projectDisplay' ref={projectDisplayRef}>
        {display && <Routes dataPoint={data} />}
      </div>
    </div>
  );
};

export default App;
