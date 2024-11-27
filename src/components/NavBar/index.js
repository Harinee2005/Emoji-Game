import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, isGameOver} = this.props
    const styles = isGameOver ? 'hide' : '' // Apply the 'hide' class to hide score section when the game ends

    return (
      <nav className="navbar-bgcolor">
        <div className="logo-title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="game-title">Emoji Game</h1>
        </div>

        {!isGameOver && (
          <div className={`scores ${styles}`}>
            <p className="scores-text">Score: {score}</p>
            <p className="scores-text">Top Score: {topScore}</p>
          </div>
        )}
      </nav>
    )
  }
}

export default NavBar
