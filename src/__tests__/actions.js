import { hasError, isLoading, updateHouses } from '../actions'

describe('actions', () => {
  describe('hasError', () => {
    it('should return object with type of HAS_ERROR and a error', () => {
      const mockError = 'Im wrong!'
      const expected = {
        type: 'HAS_ERROR',
        error: 'Im wrong!'
      }
      const result = hasError(mockError)
      expect(result).toEqual(expected)
    })
  })

  describe('isLoading', () => {
    it('should return object with type of IS_LOADING and isLoading', () => {
      const mockBool = true
      const expected = {
        type: 'IS_LOADING',
        isLoading: true
      }
      const result = isLoading(mockBool)
      expect(result).toEqual(expected)
    })
  })

  describe('updateHouses', () => {
    it('should return object with type of UPDATE_HOUSES and houses', () => {
      const mockHouses = ['im a bunch of houses that people care way too much about']
      const expected = {
        type: 'UPDATE_HOUSES',
        houses: ['im a bunch of houses that people care way too much about']
      }
      const result = updateHouses(mockHouses)
      expect(result).toEqual(expected)
    })
  })
})