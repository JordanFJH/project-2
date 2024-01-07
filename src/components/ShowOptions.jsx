import { useState } from "react";

function ShowOptions({ word, ants, syns, chosen, setChosen, setGameOver, gameOver, setSynsSelected, synsSelected, setAntsSelected, antsSelected }) {

    let [selectedClass, setSelectedClass] = useState("option-holder-unselected")
    let thisWord = "";

    if (syns.includes(word)) {
        thisWord = "syn"
    }
    if (ants.includes(word)) {
        thisWord = "ant"
    }

    function selected() { //function for when an option is selected
        if (chosen > 2 || gameOver === true) {
            console.log("The game is over")
            setGameOver(true)
            return
        }
        setChosen(chosen + 1)
        setSelectedClass("option-holder-selected")
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
        <div onClick={selected} className={selectedClass}>
            <h4 >{word}</h4>
        </div>
    );
}

export default ShowOptions;