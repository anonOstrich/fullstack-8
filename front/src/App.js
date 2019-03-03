import React, { useState } from 'react'
import { gql } from 'apollo-boost'

import SelectionBar from './components/SelectionBar'
import Authors from './components/Authors'
import Books from './components/Books'


const App = () => {
  const [ selection, setSelection] = useState('authors')



  return (
  <div>
  <SelectionBar selection={ selection } showInfo={(info => setSelection(info))} />
  { selection === 'authors'  ? 
  <Authors />
  : <Books />}
  </div>)
}

export default App