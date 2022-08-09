import "./GameOver.css";

const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={retry}>Resetar o jogo</button>
    </div>
  );
};

export default GameOver;
