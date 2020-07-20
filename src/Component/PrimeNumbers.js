import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./PrimeNumbers.css";
const PrimeValue = () => {
  const [numbers, setNumbers] = useState([]); //create an array to store numbers
  const [result, setResult] = useState([]);

  function addItem() {
    const primeNumbers = numbers.filter(number => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    checkAllValuesForPrime(primeNumbers);
  }

  function checkAllValuesForPrime(primeNumbers) {
    numbers.map(item => {
      if (primeNumbers.includes(item)) {
        setResult(prevState => [
          ...prevState,
          {
            number: item,
            isPrime: true
          }
        ]);
      } else {
        setResult(prevState => [
          ...prevState,
          {
            number: item,
            isPrime: false
          }
        ]);
      }
      return "";
    });
  }

  function getValue(evt) {
    const values = evt.target.value.split(",");
    const parsedResult = values.map(value => {
      return parseInt(value, 10);
    });
    console.log(parsedResult);
    setNumbers(parsedResult);
    //console.log(evt.target.value.split(","));
  }
  return (
    <div>
      <form>
        <label>
          Number List :
          <input
            className="input-value"
            type="text"
            name="name"
            onChange={getValue}
          />
        </label>
      </form>
      <button className="submit-value" onClick={addItem}>
        Check prime number
      </button>
      <ul className="listNo">
        {result.map(primeNumber => (
          <li key={primeNumber.number} className="listNo">
            {`${primeNumber.number}-${primeNumber.isPrime}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrimeValue;
