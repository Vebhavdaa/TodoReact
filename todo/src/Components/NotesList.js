import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const NotesList = ({ notes,handleDelete,handleEdit }) => {
  return (
    <>
      {notes &&
        notes.map((el,index) => {
          return (
            <div className="note" key={index}>
              <h1>{el.title}</h1>
              <p>{el.content}</p>
              <button onClick={()=>handleEdit(el.id)} className="edit-button" ><EditIcon/></button>
              <button onClick={()=>handleDelete(el.id)} className="delete-button"><DeleteIcon/></button>
            </div>
          );
        })}
    </>
  );
};

export default NotesList;
