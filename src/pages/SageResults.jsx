import { useEffect, useState } from "react";




function SageResults({ setShowResult, phrase, category }) {

    let [imgSrc, setImgSrc] = useState("");



    return (
        <div className="sage-result">
            <button onClick={() => setShowResult(false)}>Return to Smartical</button>
            <h1>This is the page for the Sage results</h1>
            <img src={imgSrc} alt="picture of something" />
            <h2>{phrase.join(" ")}</h2>
        </div>
    );
}

export default SageResults;