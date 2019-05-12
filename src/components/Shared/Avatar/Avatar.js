import React from 'react'
import axios from 'axios'

class Avatar extends React.Component {
  state = {
    avatarImage: ''
  }

  getImage = async () => {
    const { data: image } = await axios.get('https://randomuser.me/api/')
    this.setState({ avatarImage: image.results[0].picture.medium })
  }

  componentDidMount() {
    this.getImage()
    console.log(this.state.avatarImage)
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
