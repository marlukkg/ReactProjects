import './App.css'
import { Welcome } from './Welcome';
import { Button } from './Button';
import { SimpleCounter } from './SimpleCounter';

function App() {

  return (
    <div>
      <SimpleCounter/>
      <h1>Welcome to my app!</h1>
      <Welcome name="Marko" lastName="Lukic" />
      <Welcome name="Rehor" lastName="Floryan"/>
      <Welcome name="Irena" lastName="Volfova"/>
      <Button />
    </div>
  )
}

export default App
