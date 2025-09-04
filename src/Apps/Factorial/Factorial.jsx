import { useState } from "react";

function Factorial(){
    const [num, setNum] = useState("");
    const [result, setResult] = useState("");

    const calculateFactorial = () => {
        let n = Number(num);

        if(n < 0) {
            setResult("Factorial is not defined for negative number !");
            return;
        }

        let fact = 1;
        for(let i = 1; i <= n; i++){
          fact = fact * i;
        }

        setResult(`Factorial of ${n} is ${fact}`);
    };

    return(
        <div>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter a number" />
            <button onClick={calculateFactorial}>Calculate</button>
            <p>{result}</p>
        </div>
    );
}

export default Factorial;