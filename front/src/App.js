import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'

import SelectionBar from './components/SelectionBar'
import Authors from './components/Authors'
import AuthorForm from './components/AuthorForm'
import Books from './components/Books'
import BookForm from './components/BookForm'

const ALL_AUTHORS = gql`
{
  allAuthors {
    name
    born
    bookCount
  }
}
`


const App = () => {
  const [ selection, setSelection] = useState('authors')
  const authorsInfo = useQuery(ALL_AUTHORS, { pollInterval: 2000 })


  const componentsByNames = {
    'authors': <><Authors authorsInfo={ authorsInfo }/><AuthorForm authorsInfo={ authorsInfo }/></>,
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