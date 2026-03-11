function HideCaught({ hideCaught, onToggle }) {
  return (
    <div className="my-4">
      <button onClick={onToggle} className="btn btn-soft">
        {hideCaught ? "Show Caught" : "Hide Caught"}
      </button>
    </div>
  );
}

export default HideCaught;
