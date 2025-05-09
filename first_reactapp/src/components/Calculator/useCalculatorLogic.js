import { useState } from 'react';

const useCalculatorLogic = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [lastCalculation, setLastCalculation] = useState('');

  const handleClick = (value) => {
    setInput((prev) => (prev === '0' ? value : prev + value));
  };

  const calculateResult = () => {
    try {
      const expression = input.replace(/\^/g, '**');
      const evalResult = eval(expression).toString();
      setResult(evalResult);
      setLastCalculation(`${input} = ${evalResult}`);
      setInput('');
    } catch {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
    setLastCalculation('');
  };

  return {input, result, lastCalculation, handleClick, calculateResult, clearInput};
};

export default useCalculatorLogic;
