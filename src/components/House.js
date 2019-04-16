import React from 'react'

export const House = ({ name, founded, seats, coatOfArms, titles, words, ancestralWeapons }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Founded: {founded}</p>
      <p>Seats: {seats}</p>
      <p>Coat of Arms: {coatOfArms}</p>
      <p>Titles: {titles}</p>
      <p>House Words: {words}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
    </div>
  )
}