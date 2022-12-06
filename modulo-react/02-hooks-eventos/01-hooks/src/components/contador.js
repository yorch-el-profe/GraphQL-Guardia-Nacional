function Contador({ counter, setCounter }) {

  function clickHandler() {
    setCounter(counter + 1);
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1>{counter}</h1>
      <button className="btn btn-success" onClick={clickHandler}>Click</button>
    </div>
  )
}

export default Contador;