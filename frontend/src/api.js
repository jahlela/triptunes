import fetch from 'isomorphic-fetch'
import url from 'url'

const serverlessUrl = 'https://dp5otq7dq1.execute-api.us-east-1.amazonaws.com/dev/hello'

export function getSongsForOrigDest(origin, destination) {
  const params = url.format({ query: { origin, destination } })
  return fetch(serverlessUrl + params, { mode: 'no-cors' }).then((response) => {
    console.log(response);
  });
}
