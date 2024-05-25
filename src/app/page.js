"use client";
import React, { useState } from "react";
import "./Relatorio.css";

const Relatorio = () => {
  const [anoInicio, setAnoInicio] = useState("");
  const [anoFim, setAnoFim] = useState("");
  const [tipoProcesso, setTipoProcesso] = useState("");

  const processos = [
    { codigo: "P001", tipo: "A", ano: 2022 },
    { codigo: "P002", tipo: "B", ano: 2023 },
    { codigo: "P003", tipo: "A", ano: 2024 },
    { codigo: "P004", tipo: "C", ano: 2023 },
    { codigo: "P005", tipo: "B", ano: 2021 },
    { codigo: "P006", tipo: "A", ano: 2020 },
    { codigo: "P007", tipo: "C", ano: 2019 },
    { codigo: "P008", tipo: "B", ano: 2018 },
    { codigo: "P009", tipo: "A", ano: 2017 },
    { codigo: "P010", tipo: "C", ano: 2016 },
    { codigo: "P011", tipo: "A", ano: 2022 },
    { codigo: "P012", tipo: "B", ano: 2023 },
    { codigo: "P013", tipo: "A", ano: 2024 },
    { codigo: "P014", tipo: "C", ano: 2023 },
    { codigo: "P015", tipo: "B", ano: 2021 },
    { codigo: "P016", tipo: "A", ano: 2020 },
    { codigo: "P017", tipo: "C", ano: 2019 },
    { codigo: "P018", tipo: "B", ano: 2018 },
    { codigo: "P019", tipo: "A", ano: 2017 },
    { codigo: "P020", tipo: "C", ano: 2016 },
    { codigo: "P021", tipo: "A", ano: 2022 },
    { codigo: "P022", tipo: "B", ano: 2023 },
    { codigo: "P023", tipo: "A", ano: 2024 },
    { codigo: "P024", tipo: "C", ano: 2023 },
    { codigo: "P025", tipo: "B", ano: 2021 },
    { codigo: "P026", tipo: "A", ano: 2020 },
    { codigo: "P027", tipo: "C", ano: 2019 },
    { codigo: "P028", tipo: "B", ano: 2018 },
    { codigo: "P029", tipo: "A", ano: 2017 },
    { codigo: "P030", tipo: "C", ano: 2016 },
    { codigo: "P031", tipo: "A", ano: 2022 },
    { codigo: "P032", tipo: "B", ano: 2023 },
    { codigo: "P033", tipo: "A", ano: 2024 },
    { codigo: "P034", tipo: "C", ano: 2023 },
    { codigo: "P035", tipo: "B", ano: 2021 },
    { codigo: "P036", tipo: "A", ano: 2020 },
    { codigo: "P037", tipo: "C", ano: 2019 },
    { codigo: "P038", tipo: "B", ano: 2018 },
    { codigo: "P039", tipo: "A", ano: 2017 },
    { codigo: "P040", tipo: "C", ano: 2016 },
    { codigo: "P041", tipo: "A", ano: 2022 },
    { codigo: "P042", tipo: "B", ano: 2023 },
    { codigo: "P043", tipo: "A", ano: 2024 },
    { codigo: "P044", tipo: "C", ano: 2023 },
    { codigo: "P045", tipo: "B", ano: 2021 },
    { codigo: "P046", tipo: "A", ano: 2020 },
    { codigo: "P047", tipo: "C", ano: 2019 },
    { codigo: "P048", tipo: "B", ano: 2018 },
    { codigo: "P049", tipo: "A", ano: 2017 },
    { codigo: "P050", tipo: "C", ano: 2016 },
  ];

  const processosFiltrados = processos.filter((processo) => {
    const anoValido =
      (!anoInicio || processo.ano >= anoInicio) &&
      (!anoFim || processo.ano <= anoFim);
    const tipoValido = !tipoProcesso || processo.tipo === tipoProcesso;
    return anoValido && tipoValido;
  });

  return (
    <div className="relatorio-container">
      <h2>Relatório de Processos</h2>
      <div className="filtros">
        <div className="filtro-item">
          <label htmlFor="anoInicio">Ano Início:</label>
          <input
            type="number"
            id="anoInicio"
            value={anoInicio}
            onChange={(e) => setAnoInicio(e.target.value)}
          />
        </div>
        <div className="filtro-item">
          <label htmlFor="anoFim">Ano Fim:</label>
          <input
            type="number"
            id="anoFim"
            value={anoFim}
            onChange={(e) => setAnoFim(e.target.value)}
          />
        </div>
        <div className="filtro-item">
          <label htmlFor="tipoProcesso">Tipo de Processo:</label>
          <select
            id="tipoProcesso"
            value={tipoProcesso}
            onChange={(e) => setTipoProcesso(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="A">Tipo A</option>
            <option value="B">Tipo B</option>
            <option value="C">Tipo C</option>
          </select>
        </div>
      </div>

      <table className="processos-tabela">
        <thead>
          <tr>
            <th>Código</th>
            <th>Tipo de Processo</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {processosFiltrados.map((processo) => (
            <tr key={processo.codigo}>
              <td>{processo.codigo}</td>
              <td>{processo.tipo}</td>
              <td>{processo.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Relatorio;
