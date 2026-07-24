import { useState } from "react"


export const SimpleCounter = () => {

    const [count, setCount] = useState(0);
    
    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment the Counter</button>
        </div>
    )

}