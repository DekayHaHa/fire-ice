import { hasError, isLoading, updateHouses } from '../actions'

export const getHouses = () => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/houses')
      dispatch(isLoading(true))
      if (!response.ok) {
        throw Error()
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(updateHouses(cleanHouse(data)))
    } catch (error) {
      dispatch(hasError(error.message))
    }

  }
}

const cleanHouse = (rawHouses) => {
  return rawHouses.map(house => {
    return {
      name: house.name,
      founded: house.founded || 'N/A',
      seats: house.seats.join(', '),
      titles: house.titles.join(', '),
      coatOfArms: house.coatOfArms,
      ancestralWeapons: house.ancestralWeapons.join(', '),
      words: house.words || 'N/A'
    }
  })
}