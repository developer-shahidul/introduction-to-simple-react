const Selected = ({ man, handelDeletBtn }) => {
  const { name, img, preferred_foot, id } = man;
  console.log(img);
  return (
    <div>
      <div className="flex justify-between items-center gap-6 border rounded-lg p-6 bg-white shadow-md">
        <div className="flex gap-6 items-center    ">
          <div>
            <img
              src={img}
              alt={name}
              className="w-20 h-20 object-cover rounded-2xl mb-2"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">{name}</h2>
            <h5>{preferred_foot}</h5>
          </div>
        </div>

        <button onClick={() => handelDeletBtn(id)}>
          <img
            className="h-7 w-7 object-cover"
            src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Selected;
