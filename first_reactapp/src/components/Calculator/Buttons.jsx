import React from 'react';

const Buttons = ({ onButtonClick }) => {
  const buttons = [
    ['+', '-', '*', '/'],
    ['7', '8', '9', '^'],
    ['4', '5', '6', '('],
    ['1', '2', '3', ')'],
    ['0', '.', 'C', '='],
  ];

  const whiteButtons = ['+', '-', '*', '/', '=', '^', '(', ')'];

  return (
  <div className="buttons">
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((btn) => (
            <button key={btn}
              onClick={() => onButtonClick(btn)}
              className={whiteButtons.includes(btn) ? 'white' : ''}
            >
            {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;