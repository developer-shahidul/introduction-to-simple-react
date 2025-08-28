//
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmark, readingTime }) => {
  // console.log(bookmark);
  return (
    <div className="md:w-1/3 mt-8 ">
      <div>
        <h2 className="text-2xl font-bold text-[#6047EC] py-[21px] bg-[#6047EC10] mb-6 text-center rounded-lg">
          Spent time on read : {readingTime} min
        </h2>
      </div>
      <div className="rounded-lg bg-[#11111110] p-[30px] ">
        <h2 className="text-3xl font-bold mb-4">
          Bookmarks : {bookmark.length}
        </h2>
        {bookmark.map((items, index) => (
          <Bookmark key={`${items.id}-${index}`} bookmark={items}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
