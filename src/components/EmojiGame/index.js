import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedEmojis: [], isGameOver: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {clickedEmojis, score, topScore} = this.state
    if (clickedEmojis.includes(id) || score === 12) {
      this.setState({isGameOver: true, topScore: Math.max(score, topScore)})
      return
    }
    if (score + 1 === 12) {
      this.setState({
        score: 12,
        topScore: Math.max(12, topScore),
        isGameOver: true,
      })
      return
    }
    this.setState(prevState => ({
      clickedEmojis: [...prevState.clickedEmojis, id],
      score: prevState.score + 1,
    }))
  }

  restartGame = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      isGameOver: false,
    })
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    const shuffledList = this.shuffledEmojisList()

    return (
      <div>
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        {!isGameOver ? (
          <div className="whole-bg">
            <ul className="background-color">
              {shuffledList.map(eachItem => (
                <EmojiCard
                  onGame={this.onClickEmoji}
                  details={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="whole-bg">
            <div className="background-color">
              <WinOrLoseCard
                onRestart={this.restartGame}
                score={score}
                topScore={topScore}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
