import React from 'react'

import Comment from './Comment'

export default class Post extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      newCommentText: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    this.setState({
      comments: [
        ... this.state.comments,
        { text: this.state.newCommentText }
      ]
    })

    e.preventDefault()
  }

  handleChange(e) {
    this.setState({ newCommentText: e.target.value })
  }

  render() {
    return (
      <div>
        <h3> { this.props.title } </h3>
        <form onSubmit={this.handleSubmit} >
          <input value={this.state.newCommentText}
          onChange={this.handleChange} />
          <button type="submit">Comentary</button>
        </form>
        { this.state.comments.map((comment, index) => {
          return <Comment key={index} text={comment.text} />
        }) }
      </div>
    )
  }
}