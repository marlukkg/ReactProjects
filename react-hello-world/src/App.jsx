import './App.css'
import { Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <h1 style={{ paddingTop: '80px' }}>Welcome!</h1>
      <p>Please check out the <Link to="/about">About</Link> page for more information.</p>
    </div>
  )
}

export default App
