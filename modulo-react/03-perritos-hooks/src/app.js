import SelectBreed from "./components/select-breed";
import { useState } from "react";
import BreedContext from "./context/breed";
import ImgDog from "./components/img-dog";

function App() {
  const [breed, setBreed] = useState("");

  return (
    <BreedContext.Provider value={{ breed, setBreed }}>
      <div className="container">
        <div className="row">
          <SelectBreed />
        </div>
        <div className="row">
          <ImgDog />
        </div>
      </div>
    </BreedContext.Provider>
  );
}

export default App;
