import React from 'react'

const Authors = ({ authorsInfo}) => {

  if(authorsInfo.loading){
    return <div>Loading...</div>
  }

  return(
    <div>
      <h2>authors</h2>
      <table>
      <thead>
        <tr>
          <th></th>
          <th><strong>born</strong></th>
          <th><strong>books</strong></th>
        </tr>
      </thead>
        <tbody>
          {authorsInfo.data.allAuthors.map(author => (
            <tr key={author.name}>
              <td>{author.name}</td>
              <td>{author.born}</td>
              <td>{author.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Authors