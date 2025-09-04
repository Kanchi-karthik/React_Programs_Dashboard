import { useState } from "react";

function NaturalNumbers() {
  // state to store the input number
  const [limit, setLimit] = useState();

  // generate numbers up to "limit"
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <h2>Natural Numbers Generator</h2>

      {/* Input box */}
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        placeholder="Enter a number"
      />

      {/* Display numbers */}
      <ul>
        {numbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default NaturalNumbers;
