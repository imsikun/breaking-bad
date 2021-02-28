import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const formChange = q => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className='search'>
      <form action='#'>
        <input
          type='text'
          value={text}
          className='form-control'
          placeholder='search characters'
          onChange={e => formChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search
