import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { listJobs } from '../graphql/queries';
import { API, graphqlOperation, Auth } from 'aws-amplify';

class JobList extends Component {

  state = {
    jobs: []
  };

  // ページ移動する度にリクエストしたくなければ Redux 使って
  // ルートコンポーネントで一度だけリクエストするとかで対応する
  componentDidMount = async () => {
    const result = await API.graphql(graphqlOperation(listJobs));
    this.setState({ jobs: result.data.listJobs.items});
  }

  renderJobList() {
    return this.state.jobs.map( job => {
      return (
        <Link to={`/detail/${job.id}`} key={job.id}>
          <div>{job.templateNo}</div>
          <div>{job.createdAt}</div>
          <hr/>
        </Link>
      )
    })
  }

  render(){
    return (
      <div>
        <hr/>
        {this.renderJobList()}
      </div>
    );
  }
};

export default JobList;
