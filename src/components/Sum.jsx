import React from "react";
import Card from "./Card";
import './Interval.css'

export default props => {
  const { min, max } = props
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  )
}