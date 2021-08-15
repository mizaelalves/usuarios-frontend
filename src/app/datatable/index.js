import React from "react";

export default function Datatable({ data }) {

  const head = [
    { name: "iD" },
    { name: "Nome" },
    { name: "Idade" },
    { name: "CPF" },
    { name: "Data de nascimento" },
  ];
  return (
    <div className="table">
    <table cellPadding={0} cellSpacing={0}>
      <thead >
        <tr>
          {head.map((head) => (
            <th key={head.name}>{head.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataUser ,i) => (
          <tr key={i}>
            <td key={dataUser.id}>{dataUser.id}</td>
            <td >{dataUser.name}</td>
            <td >{dataUser.age}</td>
            <td >{dataUser.cpf}</td>
            <td >{dataUser.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
