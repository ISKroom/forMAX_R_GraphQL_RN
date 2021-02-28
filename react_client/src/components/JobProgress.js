import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class JobProgress extends Component {

    state = {
      value: this.props.progress
    }

  handleChange = value => {
    this.setState({ value })
  };

  handleChangeComplete = () => {
    this.props.onUpdateProgress(this.state.value);
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider' style={{ width: '400px' }}>
        <Slider
          min={0}
          max={100}
          value={value}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    )
  }
}

export default JobProgress
