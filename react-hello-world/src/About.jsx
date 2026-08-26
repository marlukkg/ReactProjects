import { Link } from "react-router-dom"

function About() {

  return (
    <div>
      <h1 style={{ paddingTop: '80px' }}>About</h1>
      <p>Welcome to my website.<br/><br/>
      My name is Marko, and I have been a Web Developer for 7 years.<br/>
      If you would be interested in hiring me, please take a look at my <Link to="https://www.linkedin.com/in/marlukweb/">LinkedIn</Link> profile for more information about my experience.</p>
    </div>
  )
}

export default About