import React from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'

const EditBioModal = () => {
  return (
    <form>
      <AiOutlineCloseCircle />
      <label>
        Edit bio:
        <textarea></textarea>
      </label>
      <button>Save</button>
    </form>
  );
};

export default EditBioModal;
