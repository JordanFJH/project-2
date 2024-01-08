import { useState } from "react";
import ShowOptions from "../components/ShowOptions";
import MyTimer from "../components/MyTimer";




function SynMatchPage(props) {

    let [loading, setLoading] = useState(false);
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
    let gamyOver = false;

    let apiKey = import.meta.env.VITE_Key;

    const time = new Date();
    time.setSeconds(time.getSeconds() + 900); // sets timer for how long game last

    const requestOptions = {
        method: "GET",
        headers: {
            'X-Api-Key': apiKey
        }
    }

    function shuffle(array) { // Shuffle Array Function
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


    function handleReset() {
        setGameReady(false);
        setGameOver(false);
        setChosen(0);
        setAntsSelected(0);
        setSynsSelected(0);
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

    function checkIfGameOver() {
        if (chosen === 3) {
            gamyOver = true
        } else {
            gamyOver = false;
        }

    }

    checkIfGameOver();

    function showGameOver() {
        let result = "";
        if (antsNeeded === antsSelected && synsNeeded === synsSelected) {
            result = "You Win!!!!!"
        } else {
            result = "You lost, try again"
        }

        return (
            <div className="game-over">
                <h2>The game has ended</h2>
                <h3 class="m-0">You selected - Antonyms: {antsSelected} - Synonyms: {synsSelected}</h3>
                <h3 class="mb-0">{result}</h3>
                <button onClick={handleReset} className="game-reset">Reset</button>
            </div>
        )
    }


    async function getRandomWord() {
        if (gameReady) {
            return
        }
        setLoading(true);
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

    function gameData() {
        return (
        <section className="game-area">
                <h2>Your Word: <span className="chosen-word">{randomWord.toUpperCase()}</span></h2>
                <h2 class="m-0">This is what I want:</h2>
                <h2>Antonyms: <span class="text-red-700">{antsNeeded}</span> -- Synonyms: <span class="text-green-700">{synsNeeded}</span></h2>
                {/* <MyTimer 
                    expiryTimestamp={time} 
                    chosen={chosen} 
                    gamyOver={gamyOver} 
                    gameOver={gameOver}
                    setGameOver={setGameOver}
                    handleReset={handleReset}
                    /> */}
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
                <h2 class="m-0">Selections: <span>{chosen}</span></h2>
                {gamyOver && showGameOver()}
            </section>
        )
}

    function gameIntro() {
        return (
            <div className="synmatch-intro">
                <h1>Welcome to SynAntMatch!!!</h1>
                <h2 class="m-0">--For more information on how the game is played, visit the home page--</h2>
                <button onClick={getRandomWord} className="sage-button">Click to Start Game</button>
            </div>
        )
    }

    function gameLoading() {
        return (
            <h1>The game is loading</h1>
        )
    }
    
    function chooseGameLoading() {
        if (loading) {
            return gameLoading();
        } else {
            return gameIntro();
        }
    }

    return (
        <div className="synmatch-main">
            { gameReady === false ? chooseGameLoading() : gameData() }
        </div>
    );
}

export default SynMatchPage;