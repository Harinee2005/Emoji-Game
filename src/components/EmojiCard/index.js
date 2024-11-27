import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  onClickingEmoji = () => {
    const {details, onGame} = this.props
    const {id} = details
    onGame(id)
  }

  render() {
    const {details} = this.props
    const {emojiName, emojiUrl} = details
    return (
      <li>
        <button
          type="button"
          className="emoji-container"
          onClick={this.onClickingEmoji}
        >
          <img className="emoji" src={emojiUrl} alt={emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
