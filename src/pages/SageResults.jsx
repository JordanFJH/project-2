import { useEffect, useState } from "react";




function SageResults({ setShowResult, phrase, category, apiKey }) {

    let [imgSrc, setImgSrc] = useState("");

    let url = "https://api.api-ninjas.com/v1/randomimage?category=" + category;
    const requestOptions = {
        method: "GET",
        headers: {
            'X-Api-Key': apiKey,
            'Accept': 'image/jpg'
        }
    }

    async function getData() {
        try {
            let response = await fetch(url, requestOptions)
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        getData()
    }, [])


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