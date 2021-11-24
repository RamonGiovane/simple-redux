import React from "react";
import Card from "./Card";
import './Interval.css'
import { connect } from "react-redux";

const Random = props => {
  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{parseInt(Math.random() * (props.max - props.min)) + props.min}</strong>
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

export default connect(mapStateToProps)(Random);