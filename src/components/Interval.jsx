import React from "react";
import Card from "./Card";
import './Interval.css'

export default props => {
  const { min, max } = props
  return (
    <Card title="Intervalo de Números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min}
            onChange={e => props.onMinChange(+e.target.value)}>
          </input>
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max}
            onChange={e => props.onMaxChange(+e.target.value)}>
          </input>
        </span>
      </div>
    </Card>
  )
}