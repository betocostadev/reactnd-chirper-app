import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../store/actions/tweets'

class NewTweet extends Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState(() => ({
      text,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { text } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddTweet(text, id))

    this.setState(() => ({
      text: '',
    }))
  }
  render() {
    const { text } = this.state
    const charLeft = 280 - text.length
    // redirect user after submitting
    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='text-area'
            maxLength={280}
            rows={4}
          />
          {charLeft <= 100 && <div className='tweet-length'>{charLeft}</div>}
          <button className='btn' type='submit' disabled={text === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet)
