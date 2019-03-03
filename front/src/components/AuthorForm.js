import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo-hooks'

const EDIT_AUTHOR = gql `
  mutation editAuthor($name: String!, $born: Int!){
    editAuthor(
      name: $name,
      setBornTo: $born
    ) {
      name
      born
    }
  }
`

const AuthorForm = ({ authorsInfo }) => {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  const editAuthor = useMutation(EDIT_AUTHOR)

  const submit = e => {
    e.preventDefault()
    console.log("Author info should be changed")
    editAuthor({
      variables: {
        name,
        born: Number(born)
      }
    })
    setName('')
    setBorn('')
  }

  if(authorsInfo.loading){
    return <div>loading...</div>
  }

  return(
  <div>
  <h2>Set birhtyear</h2>
    <form onSubmit={submit}>
    <div>
    <label>
      name
      <select value={name} onChange={({target}) => setName(target.value)}>
       { authorsInfo.data.allAuthors.map(author => (
         <option value={author.name}>{author.name}</option>
       ))
       }

      </select>
    </label>
    </div>
    <div>
      born <input type="number" value={born} onChange={({target}) => setBorn(target.value)} />
    </div>
      <button type="submit">change</button>
    </form>
  </div>)
}

export default AuthorForm