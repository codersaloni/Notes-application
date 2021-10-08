import "./App.css";
import Header from "./Mycomponents/Header";
import Notes from "./Mycomponents/Notes";
import Footer from "./Mycomponents/Footer";
import { useEffect, useState } from "react";
import AddNotes from "./Mycomponents/AddNotes";

function App() {
  let initNote;
  if (localStorage.getItem("notes") === null) {
    initNote = [];
  } else {
    initNote = JSON.parse(localStorage.getItem("notes"));
  }
  //Delete function
  const onDelete = (note) => {
    console.log("I am on Delete of note!", note);
    setNotes(
      notes.filter((e) => {
        return e !== note;
      })
    );
    console.log("deleted", notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  //Adding a note function
  const addNotes = (title, desc) => {
    console.log("I am adding the note", title, desc);
    let sno;
    if (notes.length === 0) {
      sno = 0;
    } else {
      sno = notes[notes.length - 1].sno + 1;
    }
    const myNote = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setNotes([...notes, myNote]);
    console.log(myNote);
  };

  const [notes, setNotes] = useState([initNote]);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <>
      <Header title="My Notes Corner" />
      <AddNotes addNotes={addNotes} />
      <Notes notes={notes} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
