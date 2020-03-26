import React from "react";

function Card({
  title,
  img,
  description,
  ctaText,
  onButtonClick,
  fallBackImg
}) {
  const handleImgError = evt => {
    if (!fallBackImg) {
      fallBackImg = "https://placekitten.com/200/300";
    }
    evt.target.src = fallBackImg;
  };

  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={img} onError={handleImgError} />
      <p>{description}</p>
      <button onClick={onButtonClick}>{ctaText}</button>
    </div>
  );
}

export default Card;
