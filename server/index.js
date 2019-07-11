const express = require("express");
const app = express();
const port = 3000;

const { getPhysicians, getAppointments } = require("../database/index");

app.use(express.static("public"));
app.use(express.json());

app.get("/api/physicians", (req, res) => {
  getPhysicians((err, physicians) => {
    if (err) {
      res.status(500).send("error requesting physicians");
    } else {
      res.send(physicians);
    }
  });
});

app.get("/api/appointments/:physician", (req, res) => {
  const { physician } = req.params;
  getAppointments(physician, (err, appointments) => {
    if (err) {
      res.status(500).send(`error requestion ${physician}'s appointments`);
    } else {
      res.send(appointments);
    }
  });
});

app.listen(port, () => console.log("listening on: ", port));
