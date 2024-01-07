import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer({ expiryTimestamp, gamyOver, setGameOver, gameOver, handleReset }) {

    
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
        setGameOver(true)
    }

    if (gamyOver) {
        console.log("Going to try to pause the game");
    }

    return (
        <div className="timer">
            <h1>Time Remaining: { isRunning ? <span className="timer">{seconds}</span> : <span>Time is up</span>} </h1>
            { gameOver && <>
            <h2>You ran out of time!  You Lose!</h2>
            <button onClick={handleReset}>Retry</button>
            </>}
        </div>
    )
}