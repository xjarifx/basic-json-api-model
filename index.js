import express from "express";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

let persons = [
  { id: 1, name: "Alice Johnson", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob Smith", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", age: 35, email: "charlie@example.com" },
];

// get all
app.get("/persons", (req, res) => {
  res.send(persons);
});

// get by id
app.get("/persons/:id", (req, res) => {
  const person = persons.find((p) => p.id === parseInt(req.params.id));
  person ? res.send(person) : res.status(404).send("no one");
});

// post
app.post("/persons", (req, res) => {
  persons.push({ id: persons.length + 1, ...req.body });
  res.status(201).send(persons[id - 1]);
});

// put (or, edit)
app.put("/persons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let person = persons.find((p) => p.id === id);

  if (person) {
    person = { ...person, ...req.body };
    persons = persons.map((p) => (p.id === id ? person : p));
    res.status(200).send(person);
  } else {
    res.status(404).send({ msg: "something goes wrong" });
  }
});

// delete
app.delete("/persons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let person = persons.find((p) => p.id === id);
  if (person) {
    persons = persons.filter((p) => (p.id !== id ? person : ""));
    res.status(200).send({ msg: "person deleted" });
  } else {
    res.status(404).send({ msg: "something goes wrong" });
  }
});

app.listen(PORT, () => console.log("sever on"));
