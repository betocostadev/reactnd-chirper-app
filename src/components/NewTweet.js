import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAddTweet } from '../store/actions/tweets'

function NewTweet(props) {
  console.log(props)
  const [text, setText] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const text = e.target.value
    setText(text)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { dispatch, id } = props

    await dispatch(handleAddTweet(text, id))

    setText('')
    if (!id) {
      navigate('/')
    }
  }

  const charLeft = 280 - text.length

  return (
    <div>
      <h3 className='center'>Compose new Tweet</h3>
      <form className='new-tweet' onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
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

export default connect()(NewTweet)
