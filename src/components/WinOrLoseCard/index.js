import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  onRestartGame = () => {
    const {onRestart} = this.props
    onRestart()
  }

  render() {
    const {score} = this.props
    const text = score === 12 ? 'You Won' : 'You Lose'
    const bestOrScore = score === 12 ? 'Best Score' : 'Score'
    const imageUrl =
      score === 12
        ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    return (
      <div className="winOrLoseContainer">
        <img className="winOrLoseImg" src={imageUrl} alt="win or lose" />
        <div>
          <h1 className="winOrLoseText">{text}</h1>
          <p className="winOrLoseText bestOrScore">{bestOrScore}</p>
          <p className="winOrLoseText bestOrScore score-text">{score}/12</p>
          <button
            onClick={this.onRestartGame}
            className="btn-restart"
            type="button"
          >
            Play Again
          </button>
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
