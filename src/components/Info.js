import PropTypes from "prop-types";

// Componente responsável por exibir um cartão com as informações de calculo do IMC
function Info({ weight, height, id, date, imc, deleteCard }) {

  function handleDelete() {
    deleteCard(id);
  }

  return (
    // Card que exibe os dados do calculo do imc
    <div className="card">

      {/* Card info */}
      <div className="card-content">
        <span className="card-title">
          IMC: {imc}
        </span>
        <div className="card-data">
          <span data-test="weight">{weight} (kg) </span>
          <span data-test="height">{height} (cm) </span>
          <span data-test="date">{date} </span>
        </div>
      </div>

      {/* Botão de remover o card */}
      <button
        className="delete-btn"
        onClick={handleDelete}
      >
        x
      </button>
    </div>
  );
}

Info.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  imc: PropTypes.string,
  deleteCard: PropTypes.func
}

export default Info;