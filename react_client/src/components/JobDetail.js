import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getJob } from '../graphql/queries';
import { updateJob } from '../graphql/mutations';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import JobProgress from './JobProgress';

class JobDetail extends Component {

  state = {
    job: null,
    isProcessingUpdate: false
  };

  componentDidMount = async () => {
    const result = await API.graphql(graphqlOperation(
      getJob,
      { id: this.props.match.params.id }
    ));
    this.setState({ job: result.data.getJob});
  }

  onUpdateProgress = async (progress) => {
    this.setState({ isProcessingUpdate: true })
    const input = {
      id: this.state.job.id,
      progress
    }
    await API.graphql(graphqlOperation(updateJob, { input }));
    this.setState(prevState => ({
      job: {
        ...prevState.job,
        progress
      },
      isProcessingUpdate: false
    }))
  }

  renderProgress = () => {
    if (this.state.isProcessingUpdate) {
      return <div>Now Updating...</div>
    }
    return (
      <JobProgress
        onUpdateProgress={this.onUpdateProgress}
        progress={this.state.job.progress}
      />
    )
  }

  render(){
    if (this.state.job) {
      const { templateNo, copyNum, username, progress } = this.state.job;
      return (
        <div>
          {this.renderProgress()}
          <ul>
            <li>templateNo: {templateNo}</li>
            <li>copyNum: {copyNum}</li>
            <li>createdBy: {username}</li>
            <li>progress: {progress}</li>
          </ul>
        </div>
        );
    }
    return <div>Now Loading...</div>
  }
};

export default JobDetail;
