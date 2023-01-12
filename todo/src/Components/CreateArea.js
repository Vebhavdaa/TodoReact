import React from "react";
import AddIcon from "@mui/icons-material/Add";

const CreateArea = ({ title, setTitle, content, setContent, handleSubmit }) => {
  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="content"
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
