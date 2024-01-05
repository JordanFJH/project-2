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


    let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    let score = 51;

    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);

    return (
        <div className="synmatch-main">
            <h1>This is the page for SynMatch!!! Time to do some testing</h1>
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