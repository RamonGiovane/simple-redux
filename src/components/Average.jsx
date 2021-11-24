import React from "react";
import Card from "./Card";
import './Interval.css'

export default props => {
  return (
    <Card title="Média de Números" green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>5</strong>
        </span>
      </div>
    </Card>
  )
}