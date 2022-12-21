import React, {useState} from "react";

const Counter = () => {

    let [value, setValue] = useState(0);

    function increaseValue() {
        setValue(++value);
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={increaseValue}>Increase</button>
        </div>
    )
}

export default Counter;