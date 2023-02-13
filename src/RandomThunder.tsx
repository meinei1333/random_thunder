import React, { useState, useEffect } from 'react';
import './RandomThunder.css';
import separate from "./separate.mp3";

const RandomThunder = () => {
    const [startTime, setStartTime] = useState(5);
    const [endTime, setEndTime] = useState(6);
    const [isPlaying, setIsPlaying] = useState(false);
    const [randomTime, setRandomTime] = useState(0);

    useEffect(() => {
        const player = new Audio(separate);
        if (isPlaying) {
            const tempStart = startTime * 60 * 1000;
            const tempEnd = endTime * 60 * 1000;
            const randomTime = Math.floor(Math.random() * (tempEnd - tempStart + 1) + tempStart);
            setTimeout(() => {
                player.play();
            }, randomTime);
            setRandomTime(Math.round(randomTime / 1000 / 60 * 100) / 100);
        }
    }, [isPlaying, startTime, endTime]);

    const handleStart = () => {
        setIsPlaying(true);
    };

    return (
        <div className="container">
            <div>隨機播放時間(範圍)</div>
            <div className="input-group">
                <label htmlFor="start-time">起（分鐘）：</label>
                <input
                    type="number"
                    id="start-time"
                    value={startTime}
                    onChange={e => setStartTime(Number(e.target.value))}
                />
            </div>
            <div className="input-group">
                <label htmlFor="end-time">迄（分鐘）：</label>
                <input
                    type="number"
                    id="end-time"
                    value={endTime}
                    onChange={e => setEndTime(Number(e.target.value))}
                />
            </div>
            <button className="start-button" onClick={handleStart} disabled={isPlaying}>
                開始
            </button>
            <p>隨機播放時間：{randomTime} 分鐘</p>
            <div className='example-border'>
                <p>設定時間範圍(起/迄)</p>
                <p>例 起:5,迄:6</p>
                <p>產生一個在5-6之內隨機5.61</p>
                <p>按下開始之後5.61分</p>
                <p>之後會發出一個”散”的聲音</p>
            </div>
        </div>
    );
};

export default RandomThunder;
