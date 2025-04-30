const express = require("express");
const app = express();
const port = 8000;
const comidas = [
  "Helado de chorizo",
  "Tobillo de gamba",
  "Bocadillo de ppiedras",
];

app.get("/comida", (req, res) => {
  const comidaAleatoria = comidas[Math.floor(Math.random() * comidas.length)];
  res.json({ comida: comidaAleatoria });
});

app.listen(8000, () => {
  console.log("escuchando en http://localhost:8000");
});
