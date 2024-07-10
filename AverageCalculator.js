import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(0);

  const windowSize = ;

  useEffect(() => {
    const fetchNumbers = async (numberId) => {
      try {
        const response = await axios.get("/numbers/${numberId}");
        setWindowPrevState(response.data.windowPrevState);
        setWindowCurrState(response.data.windowCurrState);
        setNumbers(response.data.numbers);
        setAvg(parseFloat(response.data.avg));
      } catch (error) {
        console.error('Error fetching numbers:', error);
      }
    };

    fetchNumbers('p'); 
  }, []);

  return (
    <div>
      <h2>Average Calculator</h2>
      <p>Window Previous State: {windowPrevState.join(', ')}</p>
      <p>Window Current State: {windowCurrState.join(', ')}</p>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Average: {avg}</p>
    </div>
  );
};

export default AverageCalculator;
