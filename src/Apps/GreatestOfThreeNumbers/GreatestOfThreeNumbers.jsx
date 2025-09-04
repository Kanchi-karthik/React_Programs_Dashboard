import { useState } from "react";

    function GreatestOfThreeNumbers (){
        const [num1, setNum1] = useState("");
        const [num2, setNum2] = useState("");
        const [num3, setNum3] = useState("");
        const [result, setResult] = useState("");
        
        const Largest =() => {
            let n1 = Number(num1);
            let n2 = Number(num2);
            let n3 = Number(num3);

            const largest = Math.max(n1, n2, n3);
            
            setResult(`Greatest of three number is : ${largest}`);
        };

        return(
            <div>
                <h3>Greatest of three Numbers</h3>
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="First" />
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Second" />
                <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)} placeholder="Third" />
                <button onClick={Largest}>Check Largest Number</button>
                <p>{result}</p>
            </div>
        );
}

export default GreatestOfThreeNumbers;