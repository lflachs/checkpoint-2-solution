import React from "react";

export function Card2({ children }) {
  return <div className="card">{children}</div>;
}

Card2.Body = function CardBody({ children }) {
  return <div className="card-body">{children}</div>;
};
Card2.Title = function CardTitle({ children }) {
  return <h1>{children}</h1>;
};
Card2.Description = function CardDescription({ children }) {
  return <p>{children}</p>;
};

Card2.Image = function CardImage({ src, alt }) {
  return <img src={src} alt={alt} />;
};

Card2.Button = function CardButton({ children, action }) {
  return <button>{children}</button>;
};
