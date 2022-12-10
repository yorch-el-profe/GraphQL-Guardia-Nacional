import { useEffect, useRef, useState, useContext } from "react";
import BreedContext from "../context/breed";

function SelectBreed() {
  const selectRef = useRef();
  const [breeds, setBreeds] = useState([]);
  const { setBreed } = useContext(BreedContext);

  useEffect(function () {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => setBreeds(Object.keys(data.message)));
  }, []);

  function clickHandler() {
    setBreed(selectRef.current.value);
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <select className="form-select" ref={selectRef}>
        {breeds.map((breed) => (
          <option className="text-capitalize" key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <button type="button" className="btn btn-primary" onClick={clickHandler}>Obtener imagen</button>
    </div>
  );
}

export default SelectBreed;
