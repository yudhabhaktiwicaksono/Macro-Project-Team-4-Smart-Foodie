import {useState, useEffect} from 'react';
import "./FlashSaleComp.css"
import { getRemainingTimeUntilMsTimestamp } from './Untils/FlashSaleCompUntils';

const defaultRemainingTime = {
    seconds: '0',
    minutes: '0',
    hours: '0',
}

const FlashSaleComp = ({countdownTimestampMs}) => {
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
        <div className="countdown-timer">
            <h2>Flash Sale end in : </h2>
            <span className="two-numbers">{remainingTime.hours} </span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
        </div>
    );
}

export default FlashSaleComp;
