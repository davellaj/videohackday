import React, { Component } from 'react'

export class SavedVideo extends Component {
  componentDidMount() {
    console.log('dispatch action to get saved videos')
  }

  render() {
    return(
      <div>
        <video width="400" controls>
          <source src="https://www.youtube.com/watch?v=NpEaa2P7qZI" type="video/mp3" />
        </video>
      </div>
    )
  }
}

export default SavedVideo
