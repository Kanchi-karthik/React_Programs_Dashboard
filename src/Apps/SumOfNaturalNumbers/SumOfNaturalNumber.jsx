import { useState } from "react";

function SumOfNaturalNumbers(){
    const [limit, setLimit] = useState();

    //Generate numbers upto "Limit"
    const numbers = [];
    for(let i = 1; i <= limit; i++){
        numbers.push(i);
    }

    // Calculate Sum
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return(
        <div>
            <h3>Sum Of Natural Numbers</h3>
            {/* Input Box */}
            <input type="number" value={limit} onChange={(e) => setLimit(Number(e.target.value))} placeholder="Enter a number" />

            {/* Show Numbers */}
            <p>Numbers : {numbers.join(", ")}</p>

            {/* Show's Sum */}
            <p>Sum = {sum}</p>
        </div>
    );
}

export default SumOfNaturalNumbers