import React from "react";
import Card from "./Card";
import './Interval.css'
import { connect } from "react-redux";

const Average =  props => {
  return (
    <Card title="Média de Números" green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(props.min + props.max)/2}</strong>
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

export default connect(mapStateToProps)(Average);