const contentful = require('contentful')

const client = contentful.createClient({
  space: 'hclx72fjlbsk',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'p1mje5aSmoi52Ub8ByganNUHIbZuMRCT3ZG9Hv0dJ6A'
})

export default client
