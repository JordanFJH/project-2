import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer({ expiryTimestamp, gamyOver }) {

    
    useEffect(() => {
        if (gamyOver) {
            pause();
        }

    }, [gamyOver])

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

    if (gamyOver) {
        console.log("Going to try to pause the game");
    }

    return (
        <div className="timer">
            <h1>Time Remaining: <span>{seconds}</span> </h1>
        </div>
    )
}