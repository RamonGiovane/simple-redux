import React from "react";
import Card from "./Card";
import './Interval.css'

export default props => {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={0} readOnly></input>
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10} readOnly></input>
        </span>
      </div>
    </Card>
  )
}