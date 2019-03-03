import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'

const ALL_BOOKS = gql`
  {
    allBooks {
      title
      author
      published
    }
  }
`

const Books = () => {
  const booksInfo = useQuery(ALL_BOOKS, { pollInterval: 2000})

  if(booksInfo.loading){
    return <div>loading...</div>
  }

  return(<div>
  <h2>books</h2>
  <table>
  <thead>
    <tr>
      <th></th>
      <th>author</th>
      <th>published</th>
    </tr>
  </thead>
  <tbody>
    {booksInfo.data.allBooks.map(book => (
      <tr key={book.title}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.published}</td>
      </tr>))}
  </tbody>

  </table>
  </div>)
} 

export default Books