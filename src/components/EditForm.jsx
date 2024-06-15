import React, { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import "./CustomForm.css";
const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);
    return ()=>{
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  };

  return (
    <div role="dialog" aria-labelledby="editTask" onClick={(e)=>{e.target === e.currentTarget && closeEditMode()}}>
      <form onSubmit={handleFormSubmit} className="todo">
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label"></label>
          <button
            className="btn"
            aria-label={`confirm edited task to now read`}
            type="submit"
          >
            <CheckIcon storkeWidth={2} width={24} height={24} />
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditForm;
