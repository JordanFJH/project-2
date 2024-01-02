import { useState, useEffect } from "react";

function SagePage(props) {

    let [input, setInput] = useState("");
    let [name, setName] = useState("");
    let [truePhrase, setTruePhase] = useState(false);
    const [phrase, setPhrase] = useState([]);

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleSubmit() {
        let arr = input.split(" ");
        setTruePhase(true);
        setPhrase(arr);
    }

    function showPhrase(word, index) {
        return (
            <h2 key={index}>
                {word}
            </h2>

        )
    }

    return (
        <div className="sage-main">
            <h1>This is the page for Sage Wisdom Maker</h1>
            <h3>Enter Sage Name:</h3>
            <input type="text" value={name} onChange={handleName} />
            <br />
            <h3>Enter Phrase to Sagify:</h3>
            <input type="text" value={input} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            {truePhrase &&
                <section>
                    {phrase.map(showPhrase)}
                    <h4>- {name}</h4>
                </section>
            }

        </div>
    );
}

export default SagePage;