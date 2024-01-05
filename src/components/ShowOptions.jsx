import { useState } from "react";

function ShowOptions({ word, ants, syns, chosen }) {

    let [selectedClass, setSelectedClass] = useState("")
    let [wordStatus, setWordStatus] = useState("")
    let thisWord = "";

    if (syns.includes(word)) {
        thisWord = "syn"
    }
    if (ants.includes(word)) {
        thisWord = "ant"
    }

    function selected() {
        if (chosen >= 3) {
            return
        }
        console.log(thisWord)
    }

    return (
        <h4 onClick={selected} className={selectedClass}>{word}</h4>
    );
}

export default ShowOptions;