import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./PrimeNumbers.css";
const PrimeValue = () => {
  const [numbers, setNumbers] = useState([]); //create an array to store numbers
  const [primeNumbers, setPrimeNumbers] = useState([]);
  function isPrime(testNo) {
    var result = false;
    for (var n = testNo - 1; n > 1; n--) {
      result = (testNo % n === 0) + result;
    }

    if (result === 0 && testNo > 1) {
      return true;
    }
    return false;
  }
  function addItem() {
    numbers.filter((number) => {
      console.log(number);
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
          setPrimeNumbers([
            ...primeNumbers,
            {
              number,
              isPrime: false,
            },
          ]);
      }
      setPrimeNumbers([
        ...primeNumbers,
        {
          number,
          isPrime: true,
        },
      ]);
    });
  }

  function getValue(evt) {
    setNumbers(evt.target.value.split(","));
    //console.log(evt.target.value.split(","));
  }
  console.log(numbers);
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
        {primeNumbers.map((primeNumber) => (
          <li key={primeNumber.number} className="listNo">
            {`${primeNumber.number}-${primeNumber.isPrime}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrimeValue;
