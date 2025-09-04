//
import bg from "../../assets/bg-shadow.png";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-4/5 mx-auto gap-6 mb-96">
        {players.map((player, index) => (
          <Player key={`${player.id}-${index}`} player={player}></Player>
        ))}
      </div>

      {/* /subscribe  */}
      <div className="relative md:w-3/4 mx-auto ">
        <div className="absolute left-1/2 top-1/2 w-full  -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-3xl">
          <div
            className="bg-cover h-96 z-40 py-[88px]
             rounded-3xl backdrop-blur-[150px] ring-[28px] ring-transparent m-6"
            style={{
              backgroundImage: `
              url(${bg})
                `,
            }}
          >
            <div className=" md:w-[561px] h-auto mx-auto  ">
              <div className="mb-6 text-center">
                <h3 className="text-3xl font-bold text-[#131313] mb-4">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-xl font-medium text-[#13131370] ">
                  Get the latest updates and news right in your inbox!
                </p>
              </div>
              <div>
                <from className="md:flex gap-3 ">
                  <input
                    className="py-[18px] px-[32px] rounded-xl text-base font-normal text-[#13131340] w-full mb-3 md:mb-0"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button
                    className="text-base font-bold text-[#131313] py-[18px] px-[30px] rounded-xl md:flex 
                    bg-gradient-to-r from-[#f19bb3] to-[#f5c451]
                    "
                    type="submit"
                  >
                    Subscribe
                  </button>
                </from>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
