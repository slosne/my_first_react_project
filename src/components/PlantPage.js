import React from "react";

export default function PlantPage({
  title,
  image,
  family,
  light,
  native,
  commonName,
}) {
  return (
    <article>
      <h2>{title}</h2>
      <h3>{commonName}</h3>
      <img image={image} alt={commonName} />
      <p>Family: {family}</p>
      <p>Light requirement: {light}</p>
      <p>Native: {native}</p>
    </article>
  );
}
