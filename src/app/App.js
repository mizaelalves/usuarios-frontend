import React, { useState, useEffect } from "react";
import Datatable from "./datatable/index";
import "./style.css";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  async function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return await rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div>
        <div className="search">
          <input className="searchTerm" type="text" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className='table'>
          <Datatable data={search(data)} />
        </div>
      </div>
    </>
  );
}
