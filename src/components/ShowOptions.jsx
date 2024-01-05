import { useState } from "react";

function ShowOptions({ word, ants, syns }) {

    let [selectedClass, setSelectedClass] = useState("")
    let [wordStatus, setWordStatus] = useState("")

    if (syns.includes(word)) {
        setWordStatus("syn")
    }
    if (ants.includes(word)) {
        setWordStatus("ant")
    }

    function selected() {
        console.log(wordStatus)
    }

    return (
        <h4 onClick={selected} className={selectedClass}>{word}</h4>
    );
}

export default ShowOptions;