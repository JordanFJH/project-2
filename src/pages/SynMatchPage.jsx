import { useTimer } from "react-timer-hook";
import { useState } from "react";

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

    function showTest(num) {
        return (
            <h4>{num}</h4>
        )
    }

    let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    let score = 51;

    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);

    return (
        <div className="synmatch-main">
            <h1>This is the page for SynMatch!!! Time to do some testing</h1>
            {/* <MyTimer expiryTimestamp={time} score = {score}/> */}
            <div className="play-area">
                {testArr.map(showTest)}
            </div>
        </div>
    );
}

export default SynMatchPage;