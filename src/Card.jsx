import Toggle from "./Toggle";

function Card({ char, onToggle }) {
  const id = char.url.split("/")[6];

  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const pokeBallImg =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";

  return (
    <div className="card bg-base-100 w-36 shadow-sm border border-gray-100">
      <figure className="px-10 pt-10">
        <img
          src={char.caught ? pokeBallImg : pokemonImg}
          alt={char.name}
          className={`rounded-xl transition-all ${
            char.caught ? "w-8" : "w-36"
          }`}
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title capitalize">{char.name}</h2>

        <div className="card-actions">
          <Toggle char={char} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
}

export default Card;
