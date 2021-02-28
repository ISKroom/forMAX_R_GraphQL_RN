import React, { Component } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createJob } from '../graphql/mutations';

class JobCreate extends Component {

  state = {
    userId: "",
    username: "",
    templateNo: 1,
    copyNum: 1
  }

  componentDidMount = async () => {
    const user = await Auth.currentUserInfo();
    this.setState({
      userId: user.attributes.sub,
      username: user.username
    });
  }

  handleCreateJob = async (event) => {
    event.preventDefault();
    const input = {
      userId: this.state.userId,
      username: this.state.username,
      templateNo: this.state.templateNo,
      copyNum: this.state.copyNum,
      progress: 0,
      createdAt: new Date().toISOString(),
      isCancelled: false,
      isCompleted: false
    }

    await API.graphql(graphqlOperation(createJob, { input }));

    this.props.history.push('/');
  }

  render(){
    return (
      <form
        onSubmit={this.handleCreateJob}
      >
        <select
          defaultValue="1"
          onChange={(e) => this.setState({ templateNo: e.target.value })}
        >
          <option value="1">Template 1</option>
          <option value="2">Template 2</option>
          <option value="3">Template 3</option>
        </select>

        <input
          type="number"
          name="number"
          value={this.state.copyNum}
          onChange={(e) => this.setState({ copyNum: e.target.value })}
        />
        <input type="submit"/>
      </form>
    );
  }
};

export default JobCreate;
