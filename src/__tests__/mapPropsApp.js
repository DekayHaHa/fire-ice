import React from 'react'
import { App, mapStateToProps, mapDispatchToProps } from '../components/App/App'
import { getHouses } from '../thunks/getHouses'

jest.mock('../thunks/getHouses')

describe('map props', () => {
  describe('mapDispatchToProps', () => {
    it('should map getHouses to props', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = getHouses()
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.getHouses(['im stupid houses'])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('mapStateToProps', () => {
    it('should map selected state to props', () => {
      const mockState = {
        houses: ['more stupid houses'],
        isLoading: false,
        error: 'im wrong',
        pleaseNotMe: 'shouldnt show'
      }
      const expected = {
        houses: ['more stupid houses'],
        isLoading: false,
        error: 'im wrong'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})