import { useTimer } from "react-timer-hook";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShowOptions from "../components/ShowOptions";

function MyTimer({ expiryTimestamp, score }) {

    function timeUp() {
        alert("Time is up")
        console.log(score);
    }

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: timeUp })

    return (
        <div className="timer">
            <h1>Timer Test</h1>
            <p>{seconds}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
        </div>
    )
}


function SynMatchPage(props) {

    let [lives, setLives] = useState(3);
    let [randomWord, setRandomWord] = useState("");
    let [syns, setSyns] = useState([]);
    let [ants, setAnts] = useState([]);
    let [allWords, setAllWords] = useState([]);
    let apiKey = import.meta.env.VITE_Key;

    let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    // const time = new Date();
    // time.setSeconds(time.getSeconds() + 10);

    const requestOptions = {
        method: "GET",
        headers: {
            'X-Api-Key': apiKey
        }
    }


    async function getRandomWord() {
        try {
            let response = await fetch("https://random-word-api.vercel.app/api?words=1")
            let data = await response.json();
            console.log(data);
            setRandomWord(data[0]);
            getWordAlikes(data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    async function getWordAlikes(passedWord) {
        let url = "https://api.api-ninjas.com/v1/thesaurus?word=" + passedWord;
        try {
            let response = await fetch(url, requestOptions)
            let data = await response.json();
            console.log("In wordalikes")
            if (data.synonyms.length < 8 || data.antonyms.length < 8) {
                console.log("Too little letters")
            } else {
                console.log("all good")
            }
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="synmatch-main">
            <h1>This is the page for SynMatch!!! Time to do some testing</h1>
            <button onClick={getRandomWord}>Click for random Word</button>
            <h2>Your Word: {randomWord}</h2>
            {/* <MyTimer expiryTimestamp={time} score = {score}/> */}
            <div className="play-area">
                {testArr.map((num, index) => <ShowOptions 
                num={num} 
                key={index}
                lives={lives}
                setLives={setLives}
                />)}
            </div>
            <h2>Lives: <span>{lives}</span></h2>
        </div>
    );
}

export default SynMatchPage;