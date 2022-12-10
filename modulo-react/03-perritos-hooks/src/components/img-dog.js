import { useContext, useEffect, useState } from "react";
import BreedContext from "../context/breed";

function ImgDog() {
  const [url, setUrl] = useState('');
  const { breed } = useContext(BreedContext);

  useEffect(
    function () {
      if (breed) {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
          .then((response) => response.json())
          .then((data) => setUrl(data.message));
      }
    },
    [breed]
  );

  return <img src={url} className="img-responsive" />;
}

export default ImgDog;
