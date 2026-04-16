import { useState } from "react";
import PropTypes, {func} from "prop-types";

// Valores iniciais do formula´rio
const INITIAL_VALUES = {
  weight: "",
  height: "",
  date: ""
}

// Componente responsável por capturar os dados para o calculo do IMC
function ImcForm({change}) {

  // Estado do formulário
  const [formData, setFormData] = useState(INITIAL_VALUES);

  function handleChange(event) {

    let {name, value} = event.target;

    // Limitar os valores muito elevados
    if (value > 999) {
      value = 999;
    }

    // Obtem a data atual
    const date = new Date().toLocaleDateString();

    setFormData({
      ...formData,
      [name]: value,
      date
    });
  };

  // 
  function handleSubmit() {
    change(formData);
    setFormData(INITIAL_VALUES);
  }

  return(
    <>
      {/** Container com os campos do formulário */}
      <div>
        {/** Peso */}
        <div>
          <label>Peso (kg)</label>
          <input 
            id="weight"
            name="weight"
            type="number"
            min="1"
            max="999"
            placeholder="70"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        {/** Altura */}
        <div>
          <label>Altura (cm)</label>
          <input 
            id="height"
            name="height"
            type="number"
            min="1"
            max="999"
            placeholder="173"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
      </div>
      
      {/** Botão de calculo do IMC */}
      <div>
        <button
          id="imc-btn"
          className=""
          type="button"
          onClick={handleSubmit}
          disabled = {!formData.weight || !formData.height}
        >
          Calcular
        </button>
      </div>
    </>
  );
}

// Garantir que a função change seja fornecida
ImcForm.propTypes = {
  change : PropTypes.func.isRequired
};

export default ImcForm;