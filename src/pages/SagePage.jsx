import { useState, useEffect } from "react";
import SageTransform from "../components/SageTransform";
import { sagefy } from "../components/sagefy";

function SagePage(props) {

    let [newWord, setNewWord] = useState("");
    let [input, setInput] = useState("");
    let [name, setName] = useState("");
    let [truePhrase, setTruePhase] = useState(false);
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
        let arr = input.split(" ");
        setTruePhase(true);
        setPhrase(arr);
        arr.map((word) => {sagefy(word, setSagePhrase, sagePhrase, newWord, setNewWord)});
    }

    // function handleTransform(word) {
    //      let newWord = sagefy(word);
    //      setSagePhrase(sagePhrase => [...sagePhrase, newWord])
    //      sagefy(word, setSagePhrase, sagePhrase)
    // }   

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
                    <h3>{sagePhrase.join(" ")}</h3>
                    <h4>- {name}</h4>
                </section>
            }
        </div>
    );
}

export default SagePage;