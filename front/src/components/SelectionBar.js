import React from 'react'

const SelectionBar = ({ selection, showInfo }) => {

  return(<div>
    <button type="button" onClick={() => showInfo('authors')}>authors</button>
    <button type="button" onClick={() => showInfo('books')}>books</button>
  </div>)
} 

export default SelectionBar