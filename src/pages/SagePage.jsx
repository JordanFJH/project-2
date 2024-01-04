import { useState } from "react";
import SageResults from "./SageResults";
import { sagefy } from "../components/sagefy";

function SagePage() {

    let [input, setInput] = useState("");
    let [name, setName] = useState("");
    let [truePhrase, setTruePhrase] = useState(false);
    let [showResult, setShowResult] = useState(false);
    let [displayTopics, setDisplayTopics] = useState(false);
    let [sagePhrase, setSagePhrase] = useState([]);
    let [phrase, setPhrase] = useState([]);
    let category = "";
    let apiKey = import.meta.env.VITE_Key;


    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleResult(e) {
        switch (e.target.value) {
            case "Nature":
                category = "nature"
                break;
            case "City":
                category = "city"
                break;
            case "Technology":
                category = "technology"
                break;
            case "Food":
                category = "food"
                break;
            case "Still Life":
                category = "still_life"
                break;
            case "Abstract":
                category = "abstract"
                break;
            case "Wildlife":
                category = "wildlife"
                break;
            default:
                break;
        }
        setShowResult(true)
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
        for (let i = 0; i < arr.length; i++) {
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
                <h3>Enter Wisdom name:</h3>
                <input type="text" value={name} onChange={handleName} />
                <br />
                <h3>Enter a phrase you want to sound more smarter:</h3>
                <h4>Please make sure there are no extra spaces or apostrophes</h4>
                <input type="text" value={input} onChange={handleChange} />
                <button onClick={handleSubmit}>Smartify</button>
                {truePhrase &&
                    <section className="phrase-display">
                        <h3 className="display-sentence">Your common simpleton phrase: </h3>
                        <h3 className="user-sentence">{input}</h3>
                        <h3 className="display-sentence">That same phrase, just more smarter:</h3>
                        <h3 className="fancy-phrase">{sagePhrase?.join(" ")}</h3>
                        <h4 className="fancy-phrase">- {name}</h4>
                        <button onClick={() => setDisplayTopics(!displayTopics)}>Pair with a random image Image</button>
                        {displayTopics &&
                            <div className="image-select">
                                <h3>Choose a category you feel best pairs with your smarter quote</h3>
                                <section className="selections">
                                    <h4 onClick={handleResult}>Nature</h4>
                                    <h4>City</h4>
                                    <h4>Technology</h4>
                                    <h4>Food</h4>
                                    <h4>Still Life</h4>
                                    <h4>Abstract</h4>
                                    <h4>Wildlife</h4>
                                </section>
                            </div>

                        }
                        <br />
                        <button onClick={handleReset}>Start Over</button>
                    </section>
                }
            </div>
        )
    }

    return (
        showResult ? <SageResults setShowResult={setShowResult} phrase={sagePhrase} category={category}/> : sageMain()
    );
}

export default SagePage;