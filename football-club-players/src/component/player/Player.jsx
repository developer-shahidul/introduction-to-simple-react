//

const Player = ({ player }) => {
  // destructuring
  //   console.log(player);
  const {
    id,
    name,
    country,
    flag,
    role,
    preferred_foot,
    price,
    img,
    author,
    author_img,
  } = player;

  return (
    <div>
      <div>
        <div>
          <img src={img} alt="football player pic" />
        </div>
      </div>
    </div>
  );
};

export default Player;
