import React from "react";
import Card from "./Card";
import './Interval.css'
import { connect } from "react-redux";
import { changeMinNumber, changeMaxNumber } from "../store/actions/numbers";

const Interval = props => {
  const { min, max } = props

  return (
    <Card title="Intervalo de Números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} onChange={ e => props.changeMin(+e.target.value)}></input>
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} onChange={ e => props.changeMax(+e.target.value)}></input>
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

function mapDispatchToProps(dispatch){
  return {
    changeMin(newValue) {
      //Action creator -> retorna -> Action
      const action = changeMinNumber(newValue)

      //Notifica a alteracao do estado para todos os reducers
      dispatch(action)
    },

    changeMax(newValue) {
      //Action creator -> retorna -> Action
      const action = changeMaxNumber(newValue)

      //Notifica a alteracao do estado para todos os reducers
      dispatch(action)
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interval);