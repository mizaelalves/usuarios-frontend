import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Datatable from "../datatable/index";
import axios from "axios";
import Loadind from "./Loading"

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function Table() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  const dataTable = async () => {
    try {
      const data = await axios
        .get("https://users-m.herokuapp.com/users")
        .then((res) => {
          console.log(res);
          setData(res.data);
          setLoading(true)
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dataTable()
  }, []);

  return (
    <>
      <div className="box-table">
        <div className="headerTable">
          <div className="buttonTable">
            <Link to="/">
              <button id="voltar">Voltar</button>
            </Link>
            <Link to="/create">
              <button id="form-btn">Cadastrar</button>
            </Link>
          </div>
          <div className="search">
            <input
              className="searchTerm"
              type="text"
              placeholder="Nome"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>
        <div className="table">
          {loading ? (<Datatable data={search(data)} />) : (
            <Loadind/>
          )}
        </div>
      </div>
    </>
  );
}
