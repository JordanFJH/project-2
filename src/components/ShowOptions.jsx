import { useState } from "react";

function ShowOptions({ word, ants, syns, chosen, setChosen, setGameOver, setSynsSelected, synsSelected, setAntsSelected, antsSelected }) {

    let [selectedClass, setSelectedClass] = useState("")
    let thisWord = "";

    if (syns.includes(word)) {
        thisWord = "syn"
    }
    if (ants.includes(word)) {
        thisWord = "ant"
    }

    function selected() {
        if (chosen > 2) {
            console.log("The game is over")
            setGameOver(true)
            return
        }
        setChosen(chosen + 1)
        setSelectedClass("correct")
        if (thisWord === "syn") {
            setSynsSelected(synsSelected + 1);
        } else {
            setAntsSelected(antsSelected + 1);
        }

        console.log(thisWord)
        if (chosen > 2) {
            console.log("The game is over")
            setGameOver(true)
        }
        
    }

    return (
        <h4 onClick={selected} className={selectedClass}>{word}</h4>
    );
}

export default ShowOptions;