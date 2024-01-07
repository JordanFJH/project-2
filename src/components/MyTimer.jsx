import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer({ expiryTimestamp, gamyOver }) {
    let tryCounter = 0; // attempt to stop the app from constantly re-rendering
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

    function timeUp() {
        console.log("Time is up");
    }

    if (gamyOver && tryCounter === 0) {
        console.log("Going to try to pause the game");
    }

    return (
        <div className="timer">
            <h1>Time Remaining: <span>{seconds}</span> </h1>
        </div>
    )
}