const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());

const numeros = [];
app.post("/minmax", (req, res) => {
  const number = req.body;

  if (number !== "number") {
    return res.status(400).json({ error: "Escribe un numero paleto." });
  } // ahi no se si va el return o no

  numeros.push(number);

  const min = Math.min(...numeros);
  const max = Math.max(...numeros);

  res.json({ min, max });
});
app.listen(port, () => {});
