import React from "react";
import SingleNote from "./SingleNote";

const Notes = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Notes List</h3>
      {props.notes.length === 0
        ? "No Notes to Display"
        : props.notes.map((note) => {
            return (
              <>
                <SingleNote
                  note={note}
                  key={note.sno}
                  onDelete={props.onDelete}
                />
              </>
            );
          })}
    </div>
  );
};
export default Notes;
