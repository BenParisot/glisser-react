import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
const EditNameModal = () => {
  return (
    <form>
      <AiOutlineCloseCircle />
      <label> First Name: 
        <input></input>
      </label>
      <label> Last Name: 
        <input></input>
      </label>
      <label> Subtitle: 
        <input />
      </label>
      <button>Save</button>
    </form>
  )
}

export default EditNameModal
