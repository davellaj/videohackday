import React, { Component } from 'react'

export class SavedVideo extends Component {
  componentDidMount() {
    console.log('dispatch action to get saved videos')
  }

  render() {
    return(
      <div>
      <iframe width="420" height="315"
        src="https://www.youtube.com/embed/XGSy3_Czz8k">
      </iframe>
      </div>
    )
  }
}

export default SavedVideo
