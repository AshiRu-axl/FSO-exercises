import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

const voteList = new Uint8Array(10);

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([...voteList]);

  const getMostVotedNote = () => {
    const maxVotes = Math.max(...votes);
    const indexOfMaxVotted = votes.indexOf(maxVotes);
    return indexOfMaxVotted;
  };

  // Generate a random number and set the value to selected
  const handleRandomNote = (max) => {
    const randomNumber = Math.floor(Math.random() * max);
    setSelected(randomNumber);
  };

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes([...newVotes]);
  };

  const maxVotedIndex = getMostVotedNote();

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>
        {anecdotes[selected]} {votes[selected]} votes
      </div>
      <button onClick={() => handleVote(selected)}>vote</button>
      <button onClick={() => handleRandomNote(anecdotes.length)}>
        next anecdote
      </button>
      <h2>Anecdote with the most votes</h2>
      <div>
        {anecdotes[maxVotedIndex]} {votes[maxVotedIndex]} votes
      </div>
    </>
  );
};

export default App;
