const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Tudo certo");
  });

var cor = {
  origin: "http://localhost:5000"
};

app.use(cors(cor));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Funcionando!" });
});

require("./app/routes/routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}.`);
});