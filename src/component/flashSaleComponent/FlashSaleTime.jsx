import {useState, useEffect} from 'react';
import "./FlashSaleTime.css"
import { getRemainingTimeUntilMsTimestamp } from './Untils/FlashSaleTimeUntils';

const defaultRemainingTime = {
    seconds: '0',
    minutes: '0',
    hours: '0',
}

const FlashSaleTime = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown">
            <h2>Flash Sale end in : </h2>
            <span className="numbers">{remainingTime.hours} </span>
            <span>:</span>
            <span className="numbers">{remainingTime.minutes}</span>
            <span>:</span>
            <span className="numbers">{remainingTime.seconds}</span>
        </div>
    );
}

export default FlashSaleTime;
