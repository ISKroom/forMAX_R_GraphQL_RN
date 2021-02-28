/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      userId
      username
      templateNo
      copyNum
      progress
      createdAt
      isCancelled
      isCompleted
      updatedAt
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        username
        templateNo
        copyNum
        progress
        createdAt
        isCancelled
        isCompleted
        updatedAt
      }
      nextToken
    }
  }
`;
