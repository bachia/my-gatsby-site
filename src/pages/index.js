// Import React
import * as React from 'react'
import {Link} from 'gatsby'

// Define component
const IndexPage = () => {
  return (
    <main>
      <title>Home page</title>
      <Link to="/about">About</Link>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

//Export component
export default IndexPage