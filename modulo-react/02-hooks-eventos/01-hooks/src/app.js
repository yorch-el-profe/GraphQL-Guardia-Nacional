import { useState } from 'react';
import Contador from './components/contador';
import Formulario from './components/formulario';
import Mensaje from './components/mensaje';

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      {
        counter < 10 ? 
        <Contador counter={counter} setCounter={setCounter} /> : 
          (name !== '' ? 
            <Mensaje name={name} /> : 
            <Formulario setName={setName} />)
      }
    </div>
  );
}

export default App;