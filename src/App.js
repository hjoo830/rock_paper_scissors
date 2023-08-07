import HandButton from './HandButton';
import HandIconReal from './HandIconReal';
import { compareHand, generateRandomHand } from './utils';
import { useState } from 'react';
import './App.css';
import resetImg from "./assets/ic-reset.svg";

function getResult(me, other) {
    const comparison = compareHand(me, other);
    if (comparison > 0) return '나';
    if (comparison < 0) return '상대';
    return '무승부';
  }
  
function App() {
    const [hand, setHand] = useState('rock');
    const [otherHand, setOtherHand] = useState('rock');
    const [gameHistory, setGameHistory] = useState([]);
    const [score, setScore] = useState(0);
    const [otherScore, setOtherScore] = useState(0);
    const [bet, setBet] = useState(1);

    const handleButtonClick = (nextHand) => {
        const nextOtherHand = generateRandomHand();
        const nextHistoryItem = getResult(nextHand, nextOtherHand);
        const comparison = compareHand(nextHand, nextOtherHand);    
        
        setHand(nextHand);
        setOtherHand(nextOtherHand);
        setGameHistory([...gameHistory, nextHistoryItem]);
        if (comparison > 0) { 
            
            setScore(score + bet);
        }
        else if (comparison < 0) {
            
            setOtherScore(otherScore + bet);
        }
    };
    const handleClearClick = () => {
        setHand('rock');
        setOtherHand('rock');
        setGameHistory([]);
        setScore(0);
        setOtherScore(0);
        setBet(1);
    };

    const handleBetChange = (e) => {
        const bet=Number(e.target.value);
        setBet(bet);
    };

    return (
        <div className='App'>
            <h1 className='App-heading'>가위바위보</h1>
            <img className='App-reset' src={resetImg} alt={resetImg} onClick={handleClearClick}/>
            <div className='App-scores'>
                <div className='Score'>
                    <div className='Score-num'>{score}</div>
                    <div className='Score-name'>나</div>
                </div>
                <div className='App-versus'>:</div>
                <div className='Score'>
                    <div className='Score-num'>{otherScore}</div>
                    <div className='Score-name'>상대</div>
                </div>
            </div>
            <div className='Box App-box'>
                <div className='Box-inner'>
                    <div className='App-hands'>
                        <div className={score > otherScore ? "winner" : "Hand"}>
                            <HandIconReal value={hand} />
                        </div>
                        VS
                        <div className={score < otherScore ? "winner" : "Hand"}>
                            <HandIconReal value={otherHand} />
                        </div>
                    </div>
                    <div className='App-bet'>
                        <span>배점</span>
                        <input onChange={handleBetChange} type="number" value={bet} min={1} max={9}></input>
                    </div>
                    <div className='App-history'>
                        <h2>승부기록</h2>
                        <p>{gameHistory.join(', ')}</p>
                    </div>
                </div>
            </div>
            <div>
                <HandButton value="rock" onClick={handleButtonClick} />
                <HandButton value="scissor" onClick={handleButtonClick} />
                <HandButton value="paper" onClick={handleButtonClick} />
            </div>
        </div>
    );
}

export default App;
