import { useState, useEffect } from "react";
import SageTransform from "../components/SageTransform";
import SageResults from "./SageResults";
import { sagefy } from "../components/sagefy";

function SagePage(props) {

    let [newWord, setNewWord] = useState("");
    let [input, setInput] = useState("");
    let [name, setName] = useState("");
    let [truePhrase, setTruePhase] = useState(false);
    let [showResult, setShowResult] = useState(false);
    let [sagePhrase, setSagePhrase] = useState([]);
    const [phrase, setPhrase] = useState([]);

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleSubmit() {
        if (!input || !name) { // Does nothing if input fields are empty
            return;
        }
        setSagePhrase([]);
        let arr = input.split(" ");
        setTruePhase(true);
        setPhrase(arr);
        arr.map((word) => { sagefy(word, setSagePhrase, sagePhrase, newWord, setNewWord) });
    }

    function handleEnter() {
        setShowResult(true);
    }

    function sageMain() {
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
                        <h3>{sagePhrase.join(" ")}</h3>
                        <h4>- {name}</h4>
                        <button onClick={handleEnter}>Enter into contest</button>
                    </section>
                }
            </div>
        )
    }

    return (
        showResult ? <SageResults setShowResult={setShowResult}/> : sageMain()
    );
}

export default SagePage;