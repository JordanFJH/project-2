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
                <div className="sage-intro">
                    <h1>This is a page to help generate Instagram style content</h1>
                    <h3>Enter a smart sounding name:</h3>
                    <input type="text" value={name} onChange={handleName} placeholder="Jordan The Wise" />
                    <br />
                    <h3>Enter a simple phrase for us to make more intelligent:</h3>
                    <h3>!!PLEASE MAKE SURE THERE ARE NO EXTRA SPACES OR APOSTROPHES!!</h3>
                    <input type="text" value={input} onChange={handleChange} placeholder="I Like to run" />
                    <button onClick={handleSubmit} className="smartify-button">Smartify</button>
                </div>
                {truePhrase &&
                    <section className="phrase-display">
                        <h3 className="display-sentence">Your common phrase: </h3>
                        <h3 className="user-sentence">{input}</h3>
                        <h3 className="display-sentence">That same phrase, just a little more intelligent:</h3>
                        <h3 className="fancy-phrase">{sagePhrase?.join(" ")}</h3>
                        <h4 className="fancy-phrase">- {name}</h4>
                        <button onClick={() => setShowResult(true)} className="picture-button">Pair with a random Image</button>
                        <br />
                        <button onClick={handleReset} className="sage-reset">Start Over</button>
                    </section>
                }
            </div>
        )
    }

    return (
        showResult ? <SageResults setShowResult={setShowResult} phrase={sagePhrase} name={name} /> : sageMain()
    );
}

export default SagePage;