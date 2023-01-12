import { useEffect, useState } from "react";
import "./App.css";
import CreateArea from "./Components/CreateArea";
import Header from "./Components/Header";
import NotesList from "./Components/NotesList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {

  let initnotes;
  if (localStorage.getItem("notes") === null) {
    initnotes = [];
  }
  else {
    initnotes = JSON.parse(localStorage.getItem("notes"));
  }

  const [notes, setNotes] = useState(initnotes);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      toast.warning("Please fill all the fields", { autoClose: 2000 });
      return;
    }
    if (editMode) {
      const updatedNotes = notes.map((el) =>
        el.id === editId
          ? (el = { id: el.id, title: title, content: content })
          : { id: el.id, title: el.title, content: el.content }
      );
      setNotes(updatedNotes);
      setEditId(null);
      setEditMode(false);
      setTitle("");
      setContent("");
      toast.success("Edited Successfully", { autoClose: 2000 });
      return;
    }
    setNotes([...notes, { id: new Date(), title: title, content: content }]);
    setTitle("");
    setContent("");
    toast.success("Added Successfully", { autoClose: 2000 });

  };

  const handleDelete = (curId) => {
    setNotes(
      notes.filter((e) => {
        return e.id !== curId;
      })
    );
    toast.success("Deleted Successfully", { autoClose: 2000 });

  };

  const handleEdit = (curId) => {
    setEditMode(true);
    const editNote = notes.find((el) => el.id === curId);
    setTitle(editNote.title);
    setContent(editNote.content);
    setEditId(curId);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  return (
    <div className="App">
      <ToastContainer/>
      <Header />
      <CreateArea
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
      />
      <NotesList
        notes={notes}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
