import React, { Component } from 'react';
import Timer from './Timer.jsx';
import Progress from './Progress.jsx';
import InfoBtn from './InfoBtn.jsx';
import RemoveFeature from './RemoveFeature.jsx'


class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: this.props.elapsed
    }

    // Each Feature will have its own pseudo state to update its timer
    let interval = setInterval(() => {
      if (this.state.elapsed >= this.props.deadline) {
        clearInterval(interval);
      } else {
        this.setState({ elapsed: this.state.elapsed + 1 });
      }
    }, 1000);
  }

  render() {
    return (
      <div className="feature-container">
        <h1 className="feature-header">{this.props.title}</h1>
        <div className="tracker-container">
          <RemoveFeature index={this.props.index} removeFeature={this.props.removeFeature} />
          <Timer duration={this.props.deadline} elapsed={this.state.elapsed} />
          <Progress />
          <InfoBtn />
        </div>
      </div>
    );
  }
}

export default Feature;
