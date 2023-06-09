import React, { useState } from 'react';
import '../../Styles/Voting.css'

function Voting() {
  const [voteCounts, setVoteCounts] = useState([0, 0, 0, 0]);
  const [showWinner, setShowWinner] = useState(false);
  const emojis = ['😍', '🙂', '🙁', '🙈'];

  const handleEmojiClick = (index) => {
    const updatedCounts = [...voteCounts];
    updatedCounts[index] += 1;
    setVoteCounts(updatedCounts);
  };

  const showResults = () => {
    setShowWinner(true);
  };

  const getWinner = () => {
    const maxCount = Math.max(...voteCounts);
    const maxCountIndex = voteCounts.indexOf(maxCount);
    return emojis[maxCountIndex];
  };

  return (
    <div className='Voting'>
        <h1>Як тобі наш сайт?</h1>
      <div id="emojiContainer">
        {emojis.map((emoji, index) => (
          <div className="emoji" key={index} onClick={() => handleEmojiClick(index)}>
            {emoji}
          </div>
        ))}
      </div>
      <button className='ShowResultsVoting' onClick={showResults}>Підрахунок</button>
      <div id="result-container">
        {voteCounts.map((count, index) => (
          <div className="result" key={index}>
            <span id={`count${index + 1}`}>{count}</span> голосів
          </div>
        ))}
      </div>
      {showWinner && (
        <div id="winner-container">
          <h2>Переможець:</h2>
          <span id="winner-smiley">{getWinner()}</span>
        </div>
      )}
    </div>
  );
}

export default Voting;