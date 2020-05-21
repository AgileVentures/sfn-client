import React from 'react'

class ArtistCreate extends React.Component {
  render() {
    return (
      <div className="artist-registration-container">
        <h1>Register as an artist</h1>
        <div className="artist-registration-form-wrapper">
          <form className="artist-registration-form">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
              />
            </div>
            <div className="field">
              <label htmlFor="bio">Bio</label>
              <textarea
                name="bio"
              />
            </div>

            <input
              className="button body-large"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default ArtistCreate
