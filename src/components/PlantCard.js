import React from "react";

export default function PlantCard({ image, title, commonName }) {
  return (
    <article>
      <img image={image} alt={title} />
      <h3>{title}</h3>
      <h4>{commonName}</h4>
    </article>
  );
}
