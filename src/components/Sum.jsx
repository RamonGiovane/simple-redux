import React from "react";
import Card from "./Card";
import './Interval.css';
import { connect } from "react-redux";

const Sum = props => {
  return (
    <Card title="Soma de Números" red>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{props.min + props.max}</strong>
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

export default connect(mapStateToProps)(Sum);