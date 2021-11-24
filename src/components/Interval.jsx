import React from "react";
import Card from "./Card";
import './Interval.css'
import { connect } from "react-redux";

const Interval = props => {
  const { min, max } = props
  return (
    <Card title="Intervalo de Números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} readOnly></input>
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} readOnly></input>
        </span>
      </div>
    </Card>
  )
}

/**Mapeando as propriedades do estado global da aplicação para as propriedades desse componente
 * Min e max ficarão disponíveis em props.
 */
function mapStateToProps(state){
  return  {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

export default connect(mapStateToProps)(Interval);