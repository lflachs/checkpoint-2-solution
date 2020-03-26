import React from "react";
import fallBackImg from "../Assets/img/fallbackImg.png";

function Featured({ img, title, description, onChangeFeatured }) {
  const handleImgError = evt => {
    if (!fallBackImg) {
      fallBackImg = "https://placekitten.com/200/300";
    }
    evt.target.src = fallBackImg;
  };
  return (
    <section>
      <h1>Featured</h1>

      <div>
        <img src={img} alt={title} onError={handleImgError} />
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={() => onChangeFeatured()}>
          Give me another random Movie
        </button>
      </div>
    </section>
  );
}
export default Featured;
