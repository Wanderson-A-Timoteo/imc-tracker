import { useEffect, useState } from 'react';
import './App.css';
import { getData, storeData } from './helper/LocalStorage';
import { v4 as uuidv4 } from "uuid";

/**
 * Recupera os dados iniciais do local storage
 * caso não exista nada armazenado, retorna vazio
 */
function loadInitialState() {
  return getData("data") || [];
}

function App() {
  // Lista de registros do IMC
  const [records, setRecords] = useState(loadInitialState());

  // Dados formatados para o gráfico
  const [chartData, setChartData] = useState(
    {
      date: [],
      imc: []
    }
  );

  /**
   * Sempre que os registros mudarem, atualizar o local storage e o gráfico
   */
  useEffect(() => {

    // Registro um log com stado para verificar erros
    console.log("State:", records);

    // Salvar no local storage
    storeData("data", records);

    // Extrair datas e valores do imc para o gráfico
    const data = records.map((item) => item.date);
    const peso = records.map((item) => item.peso);
  }, [records]);

  // Calcula IMC e adiciona um novo registro
  function handleChange(values) {
    const heihtInMeters = values.height / 100;

    const imc = (values.weiht / (heihtInMeters * heihtInMeters)).toFixed(2);

    // Copia as propriedades de values e adiciona imc e id
    const newRecord = {
      ...values,
      imc,
      id: uuidv4() // Gera um id unico
    };

    // Adicionar novo registro
    let updateRecords = [...records, newRecord];

    // Matem apenas os ultimos 7 registros
    if(updateRecords.length > 7) {
      updateRecords = updateRecords.slice(1);
    }

    setRecords(updateRecords);
  }

  // Remover um registro
  function handleDelete(id) {

    // Salvar o estado anterior
    storeData("lastState", records);

    // Remove o registro
    const updateRecords = records.filter(
      (item) => item.id !== id
    );

    setRecords(updateRecords);
  }

  // Restaurar o ultimo estado salvo - desfazer
  function handleUndo() {
    setRecords(getData("lastState") || []);
  }

  return (
    <div className="container">
      <h1>IMC Tracker</h1>
    </div>
  );
}

export default App;
