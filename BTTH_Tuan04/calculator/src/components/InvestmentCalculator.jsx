import React, { useState } from "react";
import "./style.css";
const InvestmentCalculator = () => {
  const [initialMoney, setInitialMoney] = useState(100);
  const [rate, setRate] = useState(10);
  const [goal, setGoal] = useState(200);
  const [results, setResults] = useState([]);

  const calculateInvestment = () => {
    let money = parseFloat(initialMoney);
    let r = parseFloat(rate) / 100; // Convert to decimal
    let year = new Date().getFullYear();
    let data = [];

    while (money < goal) {
      let endYearMoney = money * (1 + r);
      data.push({
        year: year,
        startMoney: money.toFixed(2),
        rate: rate,
        endYearMoney: endYearMoney.toFixed(2),
      });
      money = endYearMoney;
      year++;
    }

    setResults(data);
  };

  return (
    <div className="content" >
      <h2>Investment Calculator</h2>
      <label>Input Your Invest Money: </label>
      <input
        type="number"
        value={initialMoney}
        onChange={(e) => setInitialMoney(e.target.value)}
      />
      <br />
      <label>Input Rate (%): </label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <br />
      <label>Input your Goal: </label>
      <input
        type="number"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <br />
      <button onClick={calculateInvestment}>Calculate</button>

      {results.length > 0 && (
        <table >
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.startMoney}</td>
                <td>{row.rate}</td>
                <td>{row.endYearMoney}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvestmentCalculator;
