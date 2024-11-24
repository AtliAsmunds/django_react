import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Note.css"

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleString("IS")

  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func,
};

export default Note;
