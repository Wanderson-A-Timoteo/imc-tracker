import { useEffect, useState } from 'react';
import './App.css';
import { getData, storeData } from './helper/LocalStorage';
import { v4 as uuidv4 } from "uuid";
import ImcForm from './form/ImcForm';
import Bar from './components/Bar';
import Info from './components/Info'

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
    const imc = records.map((item) => item.imc);

    setChartData({data, imc});

  }, [records]);

  // Calcula IMC e adiciona um novo registro
  function handleChange(values) {
    const heightInMeters = values.height / 100;

    const imc = (values.weight / (heightInMeters * heightInMeters)).toFixed(2);

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
    <div className="App">

      {/** Título da aplicação */}
      <div>
        <h1>Tracker IMC</h1>
      </div>

      <div>
        {/** Formulário */}
        <ImcForm change={handleChange} />

        {/** Gráfico */}
        <Bar 
          labelData={chartData.date}
          imcData={chartData.imc}
        />
      </div>

      <div>
        {/** Formulário */}
        <div className='center'>
          <h4>Últimos 7 registros</h4>
        </div>

        <div className='data-container'>
          {/** Lista de registros */}
          {records.length > 0 ? 
            (
              records.map((info) => (
                <Info 
                  key={info.id}
                  id={info.id}
                  weight={info.weight}
                  height={info.height}
                  date={info.date}
                  imc={info.imc}
                  deleteCard={handleDelete}
                />
              ))
            ) 
            : 
            (
              <div className='center'>
                Sem log encontrado
              </div>
            )
          }
        </div>
      </div>

      {/** Botão de desfazer */}
      {getData("lastState") !== null && (
        <div className='center'>
          <button className='calculate-btn' onClick={handleUndo}>
            Voltar
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
