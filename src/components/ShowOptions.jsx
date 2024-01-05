import { useState } from "react";

function ShowOptions({ num, setLives, lives }) {

    let [selectedClass, setSelectedClass] = useState("")


    function selected() {
        if (num % 2 == 0) {
            setSelectedClass("correct")
        } else {
            setSelectedClass("incorrect")
            setLives(lives - 1)
        }
    }

    return (
        <h4 onClick={selected} className={selectedClass}>{num}</h4>
    );
}

export default ShowOptions;