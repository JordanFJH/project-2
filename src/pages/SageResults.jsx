import { useEffect, useState } from "react";




function SageResults({ setShowResult, phrase, name }) {

    let [imgSrc, setImgSrc] = useState("");
    let url = "https://picsum.photos/200"

    async function getData() {
        try {
            let response = await fetch(url)
            setImgSrc(response.url)
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        getData()
    }, [])

    // <img src={imgSrc} alt="picture of something" className="sage-img" />

    function showImage() {
        return (
            <div>
                <img src={imgSrc} className="sage-img" />
                <h2 className="fancy-phrase">{phrase.join(" ")}</h2>
                <h2 className="fancy-phrase">{name}</h2>
            </div>
        )
    }

    return (
        <div className="sage-result">
            <button onClick={() => setShowResult(false)}>Return to Smartical</button>
            <h1>This is the page for the Sage results</h1>
            { imgSrc ? showImage() : <h1 className="loading">Loading Image...</h1> }
            
            
        </div>
    );
}

export default SageResults;