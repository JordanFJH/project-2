import { useEffect, useState } from "react";




function SageResults({ setShowResult, phrase, category, apiKey }) {

    let [imgSrc, setImgSrc] = useState("");
    let url = "https://picsum.photos/200"

    async function getData() {
        try {
            let response = await fetch(url)
            console.log(response)
            console.log(response.url);
            setImgSrc(response.url)
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        getData()
    }, [])

    // <img src={imgSrc} alt="picture of something" className="sage-img" />

    return (
        <div className="sage-result">
            <button onClick={() => setShowResult(false)}>Return to Smartical</button>
            <h1>This is the page for the Sage results</h1>
            <img src={imgSrc} alt="picture of something" className="sage-img" />
            <h2>{phrase.join(" ")}</h2>
        </div>
    );
}

export default SageResults;