/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/ri";
import Intro from "./Intro";

const Note = ({ notes, getNotes }) => {
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://first-project-e1dd6-default-rtdb.firebaseio.com/notes/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to delete note");
      }
      getNotes();
    } catch (err) {
      alert(err.message);
    }
  };

  if (notes.length === 0) {
    return (
      <div className="ps-4 pt-5 md:w-1/3 mx-auto">
        <Intro />
      </div>
    );
  } else {
    return (
      <div className="space-y-2">
        {notes.map((item) => (
          <div key={item.id}>
            <div className=" border shadow-md rounded-lg p-3  mx-auto bg-purple-500 text-white  md:w-1/3 flex justify-between items-center">
              {item.note}
              <div className="flex items-center space-x-4 text-xl md:text-2xl">
                <RiDeleteBin6Line
                  className="cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Note;
