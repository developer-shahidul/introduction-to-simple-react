//

const Player = ({ player, handleChoosePlayer }) => {
  // destructuring
  //   console.log(player);
  const { name, country, flag, role, preferred_foot, price, img, author_img } =
    player;

  return (
    <div>
      <div className="border rounded-2xl p-6  ">
        <div className="mb-6">
          <img
            className="h-60 w-full object-cover rounded-2xl"
            src={img}
            alt="football player pic"
          />
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <img
              className="h-9 w-9 object-cover rounded-full"
              src={author_img}
              alt=""
            />
            <h1 className="text-[#131313] text-xl font-semibold">{name}</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <img className="h-6 w-7 object-contain " src={flag} alt="" />
              <span className="text-base font-normal text-[#131313]">
                {country}
              </span>
            </div>
            <button className="px-4 py-[9px] bg-[#13131305] rounded-lg text-sm font-normal text-[#131313]">
              {role}
            </button>
          </div>
        </div>
        <hr className="my-4 h-[2px] bg-gray-300 border-0" />
        <div>
          <h3 className="mb-4 text-base font-bold text-[#131313]">Rating</h3>

          <div className="flex items-center justify-between mb-3 ">
            <h3 className="text-base font-semibold text-[#131313]">
              preferred foot
            </h3>
            <span className="text-base font-normal text-[#13131370]">
              {preferred_foot}
            </span>
          </div>
          <div className="flex justify-between items-center ">
            <h4 className="text-base font-semibold text-[#131313]">
              Price: {price}
            </h4>
            <button
              onClick={() => handleChoosePlayer(player.id)}
              className="px-4 py-[9px] rounded-lg border text-sm font-normal text-[#131313] hover:bg-[#E7FE29]"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
