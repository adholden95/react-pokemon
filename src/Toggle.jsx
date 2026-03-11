function Toggle({ char, onToggle }) {
  return (
    <button
      className={`btn ${char.caught ? "btn-success" : "btn-soft"}`}
      onClick={() => onToggle(char.url)}
    >
      {char.caught ? "Caught" : "Catch"}
    </button>
  );
}

export default Toggle;
