//

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  //   console.log(bookmark);
  return (
    <div className="py-4">
      <h3 className="text-2xl font-semibold rounded-lg bg-white p-5">
        {title}
      </h3>
    </div>
  );
};

export default Bookmark;
