import React from "react";

const SingleNote = ({ note, onDelete }) => {
  return (
    <div>
      <h4>{note.title}</h4>
      <p>{note.desc}</p>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          onDelete(note);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleNote;
