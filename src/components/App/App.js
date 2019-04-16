import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import wolf from '../../assets/wolf.gif'
import './App.css';
import { House } from '../House'
import { getHouses } from '../../thunks/getHouses'

export class App extends Component {

  componentDidMount() {
    this.props.getHouses()
  }

  housesToRender = () => {
    const { houses } = this.props
    return houses.map(house => <House key={house.name} {...house} />)
  }

  render() {
    const { isLoading, error } = this.props
    const toRender = isLoading ? <img src={wolf} alt='loading...' /> : this.housesToRender()
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          {error && <p>Error MSG: {error}</p>}
        </div>
        <div className='Display-info'>
          {toRender}
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getHouses: () => dispatch(getHouses())
})

export const mapStateToProps = (state) => ({
  houses: state.houses,
  isLoading: state.isLoading,
  error: state.error
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
