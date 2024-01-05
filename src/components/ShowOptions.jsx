import { useState } from "react";

function ShowOptions({ num }) {

    let [selectedClass, setSelectedClass] = useState("")

    return (
        <h4 onClick={() => {
            if (num % 2 == 0) {
                setSelectedClass("correct")
            }
        }} className={selectedClass}>{num}</h4>
    );
}

export default ShowOptions;