//
import Player from "../player/Player";
import { useEffect, useState } from "react";

const Players = () => {
  const [players, setPlayers] = useState([]);

  // load json fetch
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <div className="flex w-4/5 justify-between items-center mx-auto mb-8">
        <div>
          <h5 className="text-[28px] font-bold text-[#131313]">
            Available Players
          </h5>
        </div>
        <div className="border rounded-xl">
          <button className="px-[30px] py-[14px] text-base font-bold text-[#13131360]">
            Available
          </button>
          <button className="px-5 py-[14px] text-base font-bold text-[#13131360]">
            Selected (0)
          </button>
        </div>
      </div>
      {players.map((player, index) => (
        <Player key={`${player.id}-${index}`} player={player}></Player>
      ))}
    </div>
  );
};

export default Players;
