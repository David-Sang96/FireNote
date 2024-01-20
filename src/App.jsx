import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [active, setActive] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://first-project-e1dd6-default-rtdb.firebaseio.com/notes.json"
      );
      if (!response.ok) {
        throw new Error("Cannot connect to the firebase");
      }
      const data = await response.json();
      const modifiedNote = [];
      for (const key in data) {
        modifiedNote.push({ id: key, note: data[key] });
      }
      setNotes(modifiedNote);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (error) {
    return <p className="md:w-1/3 mx-auto mt-10 text-3xl">{error}</p>;
  } else {
    return (
      <div className="px-3 py-2 space-y-4">
        <NavBar getNotes={getNotes} setActive={setActive} active={active} />
        <AddNote getNotes={getNotes} notes={notes} />
        {isLoading ? (
          <div className="md:w-1/3 mx-auto mt-10 text-3xl">
            <Loader />
          </div>
        ) : (
          <>{active && <Note notes={notes} getNotes={getNotes} />}</>
        )}
      </div>
    );
  }
}

export default App;
