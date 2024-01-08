import { useEffect, useState } from "react";




function SageResults({ setShowResult, phrase, name }) {

    let [post, setPost] = useState(false)
    let [imgSrc, setImgSrc] = useState("");
    let url = "https://picsum.photos/500"

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
            <div className="image-shown">
                <img src={imgSrc} className="sage-img" />
                <h2 className="fancy-phrase">{phrase.join(" ")}</h2>
                <h2 className="fancy-phrase">- {name}</h2>
                <button onClick={() => {setPost(true)}}>Post to Instagram</button>
                {post && <h4>-Posting to Instagram Currently Unavailable-</h4>}
            </div>
        )
    }

    return (
        <div className="sage-result">
            <button onClick={() => setShowResult(false)} className="sage-button">Return to Smartical</button>
            <h1 class="mb-0">Your phrase sounds even smarter with an image!</h1>
            <h2 class="m-0">And it's Instagram ready Now!</h2>
            { imgSrc ? showImage() : <h1 className="loading">Loading Image...</h1> }
        </div>
    );
}

export default SageResults;