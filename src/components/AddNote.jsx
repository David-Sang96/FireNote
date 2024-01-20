/* eslint-disable react/prop-types */
import { useState } from "react";

const AddNote = ({ getNotes, notes }) => {
  const [note, setNote] = useState("");

  const addNote = async (e) => {
    e.preventDefault();
    if (note === "") {
      alert("Please write something!");
      return;
    }
    try {
      await fetch(
        "https://first-project-e1dd6-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(note),
        }
      );
      setNote("");
      getNotes();
    } catch (err) {
      alert("something went wrong.Please try again!");
    }
  };

  return (
    <section className="md:w-1/3 mx-auto">
      <div className="mb-3 text-purple-600 font-bold">
        Total Notes : {notes.length}{" "}
      </div>
      <form className="flex items-center gap-2" onSubmit={addNote}>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          placeholder="add note here"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />

        <button
          className="shadow bg-purple-500 hover:bg-purple-400 w-1/3 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
          type="submit"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddNote;
