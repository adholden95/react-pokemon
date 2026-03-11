import "./App.css";
import Card from "./Card";
import Nav from "./Nav";
import HideCaught from "./HideCaught";
import { useState, useEffect } from "react";

function App() {
  const [chars, setChars] = useState([]);
  const [error, setError] = useState(null);
  const [hideCaught, setHideCaught] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151",
        );
        const data = await response.json();

        const pkmnWithCatch = data.results.map((p) => ({
          ...p,
          caught: false,
        }));

        setChars(pkmnWithCatch);
      } catch (err) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  function handleToggle(url) {
    setChars((prev) =>
      prev.map((char) =>
        char.url === url ? { ...char, caught: !char.caught } : char,
      ),
    );
  }

  function handleHideToggle() {
    setHideCaught((prev) => !prev);
  }

  const displayedChars = hideCaught
    ? chars.filter((char) => !char.caught)
    : chars;

  return (
    <div className="container px-8">
      <Nav />
      {error && <p className="text-red-500">{error}</p>}

      <HideCaught hideCaught={hideCaught} onToggle={handleHideToggle} />

      <div className="grid grid-cols-4 lg:grid-cols-7 gap-4">
        {displayedChars.map((char) => (
          <Card key={char.name} char={char} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
}

export default App;
