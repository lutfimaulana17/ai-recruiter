import React, { useEffect, useState } from 'react'

const TimerComponent = ({ start }) => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(start);

    useEffect(() => {
        const interval = running ? setInterval(() => setTime(t => t + 1), 1000) : null;
        return () => clearInterval(interval);
    }, [running]);

    return (
        <h2>{String(Math.floor(time / 60)).padStart(2, '0')}: {String(time % 60).padStart(2, '0')}</h2>
    )
}

export default TimerComponent