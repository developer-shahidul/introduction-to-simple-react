//
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmark }) => {
  // console.log(bookmark);
  return (
    <div className="md:w-1/3 mt-8 ">
      <div className="rounded-lg bg-[#11111110] p-[30px]">
        <h2 className="text-3xl font-bold mb-4">
          BookMarks : {bookmark.length}
        </h2>
        {bookmark.map((items, index) => (
          <Bookmark key={`${items.id}-${index}`} bookmark={items}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
