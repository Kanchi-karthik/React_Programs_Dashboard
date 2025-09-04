import { useState } from "react";

function Armstrong(){
    const [num, setNum] = useState("");
    const [result, setResult] = useState("");

    const checkArmstrong = () => {
        const digits = num.split("").map(Number); // Split numbers into digits
        const power = digits.length;

        const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);

        if(sum == Number(num)){
            setResult(`${num} is an Armstrong Number!`);
        }else{
            setResult(`${num} is not a Armstrong Number!`);
        }
    };

    return(
        <div>
            <h3>Armstrong Number</h3>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter a Number"/>
            <button onClick={checkArmstrong}>Check </button>
            <p>{result}</p>
        </div>
    );
}

export default Armstrong;