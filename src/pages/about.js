import * as React from 'react'
import {Link} from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <title>About me</title>
            <Link to="/">Go back to Home</Link>
            <h1>About me</h1>
            <p>Hi there! I'm proud creator of this site, which I build with Gatsby.</p>
        </main>
    )
}

export default AboutPage