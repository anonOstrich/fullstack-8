import React, { useState } from 'react'
import { gql } from 'apollo-boost'

import SelectionBar from './components/SelectionBar'
import Authors from './components/Authors'
import Books from './components/Books'
import BookForm from './components/BookForm'


const App = () => {
  const [ selection, setSelection] = useState('authors')

  const componentsByNames = {
    'authors': <Authors />,
    'books': <Books />,
    'addBook': <BookForm />    
  }


  return (
  <div>
  <SelectionBar selection={ selection } showInfo={(info => setSelection(info))} />
  { componentsByNames[selection] }
  </div>)
}

export default App