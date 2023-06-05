import React, { useState } from 'react';
import './styles.css';

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }

  return (
    <div>
      <div>
        <button onClick={() => handleOptionClick('40s')} className={selectedOption === '40s' ? 'selected' : ''}>40s</button>
        <button onClick={() => handleOptionClick('50s')} className={selectedOption === '50s' ? 'selected' : ''}>50s</button>
        <button onClick={() => handleOptionClick('60s')} className={selectedOption === '60s' ? 'selected' : ''}>60s</button>
        <button onClick={() => handleOptionClick('70s')} className={selectedOption === '70s' ? 'selected' : ''}>70s</button>
        <button onClick={() => handleOptionClick('90s')} className={selectedOption === '90s' ? 'selected' : ''}>90s</button>
      </div>
      <div>{selectedOption}</div>
    </div>
  );
}

export default MyComponent;


const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    localStorage.setItem('selectedOption', option);
  }

  const buttonStyle = {
    backgroundColor: '#FFFFFF'
  };

  const selectedButtonStyle = {
    backgroundColor: '#4CAF50'
  };

  return (
    <div>
      <div>
        <button onClick={() => handleOptionClick('40s')} style={selectedOption === '40s' ? selectedButtonStyle : buttonStyle}>40s</button>
        <button onClick={() => handleOptionClick('50s')} style={selectedOption === '50s' ? selectedButtonStyle : buttonStyle}>50s</button>
        <button onClick={() => handleOptionClick('60s')} style={selectedOption === '60s' ? selectedButtonStyle : buttonStyle}>60s</button>
        <button onClick={() => handleOptionClick('70s')} style={selectedOption === '70s' ? selectedButtonStyle : buttonStyle}>70s</button>
        <button onClick={() => handleOptionClick('90s')} style={selectedOption === '90s' ? selectedButtonStyle : buttonStyle}>90s</button>
      </div>
      <div>{selectedOption}</div>
    </div>
  );
}

export default MyComponent;