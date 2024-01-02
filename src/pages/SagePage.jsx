import { useState, useEffect } from "react";

function SagePage(props) {

    let [input, setInput] = useState("");
    const [phrase, setPhrase] = useState([]);

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit() {

    }

    return (
        <div className="sage-main">
            <h1>This is the main page for Sage Wisdom Maker</h1>
            <input type="text" value={input} onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SagePage;