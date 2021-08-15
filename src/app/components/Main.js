import React from "react";
import { Link } from "react-router-dom";


export default function Main() {
  return (
      <div className="content">
        <div className="box">
        <div className="imagem"></div>
        <div className="title">
          <h2>Bem vindo!</h2>
          <p>Oque deseja fazer?</p>
        </div>
        <div className="option">
          <Link to="/create">
          <button>Cadastrar usuario</button>
          </Link>
          <Link to="/table">
            <button>Listar usuarios</button>
          </Link>
        </div>
        </div>
      </div>

  );
}
