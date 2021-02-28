import React from 'react'
import Spinner from '../Spinner'
import CharacterItem from './CharacterItem'

const Charactergrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map(item => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
        // <CharacterItem key={item.char_id}> </CharacterItem>
      ))}
    </section>
  )
}

export default Charactergrid
