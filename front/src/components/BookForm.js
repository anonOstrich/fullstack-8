import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo-hooks'


const ADD_BOOK = gql`
  mutation addBook($title: String!, $author: String!, $published: Int!, $genres: [String!]) {
    addBook(
      title: $title,
      author: $author,
      published: $published,
      genres: $genres
    ) {
      title
    }
  }
`


const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [published, setPublished] = useState('')
  const [newGenre, setNewGenre] = useState('')
  const [genres, setGenres] = useState([])

  const addBook = useMutation(ADD_BOOK)



  const submit = async e => {
    e.preventDefault()

    await addBook({
      variables: {
        title,
        author,
        published: parseInt(published),
        genres
      }
    })

    setTitle('')
    setAuthor('')
    setPublished('')
    setNewGenre('')
    setGenres([])
  }

  const addGenre = () => {
    setGenres(genres.concat(newGenre))
    setNewGenre('')   
  }


  return (
    <form onSubmit={submit}>
      <div>
      title
      <input type="text" value={title} onChange={({target}) => setTitle(target.value)} />
      </div>

      <div>
      author
      <input type="text" value={author} onChange={({target}) => setAuthor(target.value)} />
      </div>

      <div>
      published
      <input type="number" value={published} onChange={({target}) => setPublished(target.value)} />
      </div>

      <div>
        <input type="text" value={newGenre} onChange={({target}) => setNewGenre(target.value)} />
        <button type="button" onClick={addGenre}>add genre</button>
      </div>

      <div>
        genres: {genres.join(' ')}
      </div>
      <div>
        <button type="submit">create book</button>
      </div>
    </form>
  )
}

export default BookForm