import { useTimer } from "react-timer-hook";
import { useState } from "react";
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

    let [synsSelected, setSynsSelected] = useState(0);
    let [antsSelected, setAntsSelected] = useState(0);
    let [gameReady, setGameReady] = useState(false);
    let [gameOver, setGameOver] = useState(false)
    let [randomWord, setRandomWord] = useState("");
    let [syns, setSyns] = useState([]);
    let [ants, setAnts] = useState([]);
    let [allWords, setAllWords] = useState([]);
    let [antsNeeded, setAntsNeeded] = useState(0);
    let [synsNeeded, setSynsNeeded] = useState(0);
    let [chosen, setChosen] = useState(0);

    let apiKey = import.meta.env.VITE_Key;

    // const time = new Date();
    // time.setSeconds(time.getSeconds() + 10);

    const requestOptions = {
        method: "GET",
        headers: {
            'X-Api-Key': apiKey
        }
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }


    function setGameUp(data) {
        let synNeed = 0;
        let antNeed = 0;
        for (let index = 0; index < 3; index++) {
            let randNum = Math.round(Math.random())
            randNum === 1 ? synNeed += 1 : antNeed += 1
        }
        setAntsNeeded(antNeed);
        setSynsNeeded(synNeed);
        let fakeAllWords = [];
        let fakeSyns = data.synonyms.slice(0, 5);
        setSyns(fakeSyns)
        fakeAllWords = [...fakeSyns];
        let fakeAnts = data.antonyms.slice(0, 5)
        setAnts(fakeAnts)
        fakeSyns = fakeSyns.concat(fakeAnts);
        shuffle(fakeSyns);
        setAllWords([...fakeSyns])
        setGameReady(true)
    }

    function showGameOver() {
        return (
            <div className="game-over">
                <h2>The game has ended</h2>
            </div>
        )
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
            if (data.synonyms.length < 5 || data.antonyms.length < 5) {
                console.log("Too little letters, going to try to call again")
                getRandomWord();
            } else {
                console.log("all good")
                setGameUp(data);
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
            { gameReady &&
            <section className="game-area">
                <h2>Your Word: {randomWord}</h2>
                <h2>I want Antonyms: <span>{antsNeeded}</span> and Synonyms: <span>{synsNeeded}</span></h2>
                {/* <MyTimer expiryTimestamp={time} score = {score}/> */}
                <div className="play-area">
                    {allWords.map((word, index) => <ShowOptions
                        word={word}
                        key={index}
                        ants={ants}
                        syns={syns}
                        chosen={chosen}
                        antsSelected={antsSelected}
                        setAntsSelected={setAntsSelected}
                        synsSelected={synsSelected}
                        setSynsSelected={setSynsSelected}
                        setChosen={setChosen}
                        gameOver={gameOver}
                        setGameOver={setGameOver}
                    />)}
                </div>
                <h2>Selections: <span>{chosen}</span></h2>
                {gameOver && showGameOver()}
            </section>
}
        </div>
    );
}

export default SynMatchPage;