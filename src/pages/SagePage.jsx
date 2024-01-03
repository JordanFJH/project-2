import { useState } from "react";
import SageResults from "./SageResults";
import { sagefy } from "../components/sagefy";

function SagePage() {

    let [input, setInput] = useState("");
    let [name, setName] = useState("");
    let [truePhrase, setTruePhrase] = useState(false);
    let [showResult, setShowResult] = useState(false);
    let [sagePhrase, setSagePhrase] = useState([]);
    let [phrase, setPhrase] = useState([]);
    let apiKey = import.meta.env.VITE_Key;


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
        if (sagePhrase.length !== 0) {
            return
        }
        let arr = input.split(" ");
        let tempArr = [] // creates the placeholder for the phrase to be sent into
        for (let i = 0; i < arr.length; i++){
            tempArr.push("")
        }
        setTruePhrase(true)
        arr.map((word, index) => { sagefy(word, index, setSagePhrase, sagePhrase, apiKey, tempArr) });
    }

    function handleReset() {
        setInput("");
        setSagePhrase([]);
        setPhrase([]);
        setTruePhrase(false)
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
                <button onClick={handleReset}>Reset</button>
                {truePhrase &&
                    <section>
                        <h3>{sagePhrase?.join(" ")}</h3>
                        <h4>- {name}</h4>
                        <button onClick={() => setShowResult(true)}>Enter into contest</button>
                    </section>
                }
            </div>
        )
    }

    return (
        showResult ? <SageResults setShowResult={setShowResult} phrase={sagePhrase}/> : sageMain()
    );
}

export default SagePage;