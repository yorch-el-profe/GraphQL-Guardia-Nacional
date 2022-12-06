import { useRef } from 'react';

function Formulario({ setName }) {
  const inputRef = useRef();

  function clickHandler() {
    setName(inputRef.current.value);
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <label className="form-label">Ingresa tu nombre</label>
        <input type="text" className="form-control" ref={inputRef} />
      </div>
      <button className="btn btn-primary align-self-end ms-3" onClick={clickHandler}>Enviar</button>
    </div>
  );
}

export default Formulario;
