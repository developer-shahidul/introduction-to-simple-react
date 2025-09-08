//
import bg from "../../assets/bg-shadow.png";
import Player from "../player/Player";
import Selected from "../../component/selected players/Selected";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Players = ({ freeCradit, setFreeCradit }) => {
  const [players, setPlayers] = useState([]);
  // choose players
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  // showtab
  const [showtabs, setShowtabs] = useState(true);
  // not selected gulu show hobe
  const [showOnlyNotSelected, setShowOnlyNotSelected] = useState(false);

  // load json fetch
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  // alart
  const notify = () => toast.warning("You can select maximum 11 players!");
  const notify2 = () => toast.warning("You don't have enough money!");

  // all data show
  const handleAvailable = () => setShowtabs(true);
  const handleSelected = () => setShowtabs(false);
  const tabToggleBg = (bg) => {
    return showtabs === bg ? "bg-[#E7FE29]" : "";
  };

  // not selected tabs
  const notSelectedPlayers = players.filter(
    (player) => !selectedPlayers.find((p) => p.id === player.id)
  );

  // “Add More Player” click → setShowOnlyNotSelected(true) → render-এ filter হয়।
  // Available tab-এ শুধু not selected players দেখায়।
  // add more player

  const handleAddMorePlayer = () => {
    setShowtabs(true);
    setShowOnlyNotSelected(true);
  };

  /////////////////////////////////////////////
  // delete select player
  const handelDeletBtn = (id) => {
    // console.log("delet select palyer");
    const remainingplayer = selectedPlayers.filter((p) => p.id !== id);
    toast.warning("Player removed");
    setSelectedPlayers(remainingplayer);
  };

  const handleChoosePlayer = (id) => {
    // console.log(id);
    const selectId = players.find((player) => player.id === id);
    if (!selectId) return;

    // judi player id mile jai taile 1 jon oi nibe , warning dibe
    const existingplayer = selectedPlayers.find((p) => p.id === id);
    if (existingplayer) {
      toast.warning(
        `Congratulation !!! ${selectId.name}  is already in your squad!`
      );
      return;
    }

    // price আছে কিনা check
    if (!selectId.price) {
      notify2();
      return;
    }

    const priceStr = selectId.price;
    const priceNum = Number(priceStr.replace(/[^0-9.]/g, ""));
    if (isNaN(priceNum)) {
      notify();
      return;
    }
    if (freeCradit <= 0 || freeCradit < priceNum) {
      notify2();
      return;
    }

    // player 11 jon nibe , aer beshi hole alart chole ashbe
    if (selectedPlayers.length >= 11) {
      notify();
      return;
    }

    // console.log(newSelected);
    const newSelected = [...selectedPlayers, selectId];
    setSelectedPlayers(newSelected);

    // freeCradit aer jonno
    setFreeCradit(freeCradit - priceNum);

    // player add hole sonbordona janabe
    toast.success(`Congratulation !!! ${selectId.name} is now is your squad`);
  };

  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div className="flex  justify-end items-center  mb-8">
          {/* important class aer bitore functon add */}
          <div className="border rounded-xl overflow-hidden sticky top-0 bg-white z-50 ">
            <button
              onClick={handleAvailable}
              className={`px-[30px] py-[14px] text-base font-bold text-[#13131360]  ${tabToggleBg(
                true
              )}`}
            >
              Available
            </button>

            <button
              onClick={handleSelected}
              className={`px-5 py-[14px] text-base font-bold text-[#13131360]  ${tabToggleBg(
                false
              )}`}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>

        {/* Available Players Section */}
        {showtabs === true && (
          <div>
            <div className="py-3">
              <h5 className="text-[28px] font-bold text-[#131313]">
                {/* judi showOnlyNotSelected a kiso pawa jai taile admore na paile Available  */}

                {showOnlyNotSelected ? "Add More Players" : "Available Players"}
              </h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6">
              {/* judi showOnlyNotSelected a kiso pawa jai taile notSelectedPlayers na paile players arrow call hobe  */}

              {(showOnlyNotSelected ? notSelectedPlayers : players).map(
                (player, index) => (
                  <Player
                    key={`${player.id}-${index}`}
                    handleChoosePlayer={handleChoosePlayer}
                    player={player}
                  />
                )
              )}
            </div>
          </div>
        )}

        {/* Selected Players Section*/}
        {showtabs === false && (
          <div>
            <div className="py-3">
              <h5 className="text-[28px] font-bold text-[#131313]">
                Selected Players ({selectedPlayers.length}/11)
              </h5>
            </div>
            <div className="flex flex-col gap-6">
              {selectedPlayers.map((man, index) => (
                <Selected
                  key={`${man.id}-${index}`}
                  handelDeletBtn={handelDeletBtn}
                  man={man}
                />
              ))}
            </div>

            <div className=" w-max border mt-12 rounded-2xl">
              <button
                onClick={handleAddMorePlayer}
                className="bg-[#E7FE29] rounded-2xl m-2 px-5 py-[14px]"
              >
                Add More Player
              </button>
            </div>
          </div>
        )}

        {/* /subscribe  */}
        <div className="relative md:w-3/4 mx-auto h-5 mt-96">
          <div
            className="absolute left-1/2 top-1/2 w-full  -translate-x-1/2 -translate-y-1/2 border-2
         border-white rounded-3xl"
          >
            <div
              className="bg-cover h-96 z-40 py-[88px] border
             rounded-3xl backdrop-blur-3xl  ring-[28px] ring-transparent m-6 "
              style={{
                backgroundImage: `
                   url(${bg}) 
                `,
              }}
            >
              <div className=" md:w-[561px] h-auto mx-auto ">
                <div className="mb-6 text-center">
                  <h3 className="text-3xl font-bold text-[#131313] mb-4">
                    Subscribe to our Newsletter
                  </h3>
                  <p className="text-xl font-medium text-[#13131370] ">
                    Get the latest updates and news right in your inbox!
                  </p>
                </div>
                <div>
                  <form className="md:flex gap-3 ">
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
