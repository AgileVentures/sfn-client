import React from 'react'
import axios from 'axios'

class Avatar extends React.Component {
  state = {
    avatarImage: ''
  }

  getImage = () => {
    axios.get('https://randomuser.me/api/').then(image => {
      this.setState({ avatarImage: image.data.data.results[0].picture.medium })
    })
  }

  componentDidMount() {
    this.getImage()
  }

  render() {
    return (
      <React.Fragment>
        <img className="avatar__image white" src={this.state.avatarImage} alt="Avatar" />
      </React.Fragment>
    )
  }
}

export default Avatar
