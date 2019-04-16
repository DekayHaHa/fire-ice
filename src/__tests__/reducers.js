import { hasError, isLoading, updateHouses } from '../actions'
import { error } from '../reducers/error'
import { houses } from '../reducers/houses'
import { loading } from '../reducers/loading'

describe('reducers', () => {
  describe('error', () => {
    it('should return default state', () => {
      const mockDefault = 'default'
      const expected = 'default'
      const results = error(mockDefault, {})
      expect(results).toEqual(expected)
    })

    it('should return error msg when type HAS_ERROR', () => {
      const mockError = 'im wrong!'
      const expected = 'im wrong!'
      const results = error('', hasError(mockError))
      expect(results).toEqual(expected)
    })
  })

  describe('loading', () => {
    it('should return default state', () => {
      const mockDefault = false
      const expected = false
      const results = error(mockDefault, {})
      expect(results).toEqual(expected)
    })

    it('should return boolean when type IS_LOADING', () => {
      const mockBool = true
      const expected = true
      const results = loading(false, isLoading(mockBool))
      expect(results).toEqual(expected)
    })
  })

  describe('houses', () => {
    it('should return default state', () => {
      const mockDefault = []
      const expected = []
      const results = houses(mockDefault, {})
      expect(results).toEqual(expected)
    })

    it('should return boolean when type IS_LOADING', () => {
      const mockHouses = ['im a bunch of houses that people care way too much about']
      const expected = ['im a bunch of houses that people care way too much about']
      const results = houses([], updateHouses(mockHouses))
      expect(results).toEqual(expected)
    })
  })
})