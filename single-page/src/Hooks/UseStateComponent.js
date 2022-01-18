import React, {useState} from "react";

export default function UseStateComponent() {
    
    var [counter, setCounter] = useState(0);

    setTimeout(() => {
        setCounter(counter + 1)
    }, 1000)

    return (
        <h1>This is The Counter Value: {counter}</h1>
    )
}
