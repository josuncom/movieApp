import React, { useState, useEffect} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [keyword, setKeyword] = useState("");

    console.log("I will print all the time.");

    const onClick = () => setCount((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    useEffect(() => {
        console.log("CALL THE API.....");
    }, []);

    useEffect(() => {
        if(keyword !== "" && keyword.length > 5)
        console.log("I will print when 'keyword' changes.");
    }, [keyword]);

    useEffect(() => {
        console.log("I will print when 'count' changes.");
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClick}>Click Me !</button>
            <input value={keyword} type="text" onChange={onChange} placeholder="What you want to find?"/>
        </div>
    );
}

export default Counter;