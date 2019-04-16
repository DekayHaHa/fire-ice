import { hasError } from './actions/index'


export const fetchThings = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw Error()
    }
    const data = await response.json()
    return cleanHouse(data)
  } catch (error) {
    return hasError(error.message)
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
