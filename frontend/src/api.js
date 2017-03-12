import fetch from 'isomorphic-fetch'
import url from 'url'

serverlessUrl = 'https://dp5otq7dq1.execute-api.us-east-1.amazonaws.com/dev/hello'

export getSongsForOrigDest(origin, destination) -> {
  params = url.format({ query: { origin, destination } })
  fetch(serverlessUrl + params, { mode: 'no-cors' }).then((response) => {
    console.log(response)
  })
}
