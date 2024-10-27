const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  environment: 'master', 
  accessToken: process.env.NEXT_PUBLIC_API_KEY
})

export default client
