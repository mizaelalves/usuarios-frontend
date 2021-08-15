import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const data = {
  name: "",
  age: 0,
  cpf: 0,
  date: "",
};

export default function CreateUser() {
  const [users, setUser] = useState(data);

  async function create() {
    axios
      .post("https://users-m.herokuapp.com/users", users)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    return (
      <div>
        <h1>Usuario cadastrado</h1>
      </div>
    );
  }

  function handle(e) {
    const newUser = { ...users };
    newUser[e.target.id] = e.target.value;

      setUser(newUser);
      console.log(newUser);


  }

  return (
    <div className="content">
      <form className="form">
        <div className="inputs">
          <div className="form-input">
            <input
              className="searchTerm"
              type="text"
              placeholder="Nome"
              onChange={(e) => handle(e)}
              id="name"
              value={users.name}
              required
            />
          </div>
          <div className="form-input">
            <input
              className="searchTerm"
              type="number"
              placeholder="Idade"
              onChange={(e) => handle(e)}
              id="age"
              value={users.age}
              required
            />
          </div>
          <div className="form-input">
            <input
              className="searchTerm"
              type="text"
              placeholder="CPF"
              onChange={(e) => handle(e)}
              id="cpf"
              value={users.cpf}
              required
            />
          </div>
          <div className="form-input">
            <input
              className="searchTerm"
              type="date"
              placeholder="Data de Nascimento"
              onChange={(e) => handle(e)}
              id="date"
              value={users.date}
              required
            />
          </div>
        </div>
        <div className="buttons">
          <button id="form-btn" type="submit" onClick={create}>
            Salvar
          </button>
          <Link to="/table">
            <button id="listar-btn">Listar</button>
          </Link>
          <Link to="/">
            <button id="voltar-btn">Voltar</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
