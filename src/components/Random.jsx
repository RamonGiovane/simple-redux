import React from "react";
import Card from "./Card";
import './Interval.css'

export default props => {
  const { min, max } = props
  return (
    <Card title="Soteio de um Número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{parseInt(Math.random() * (max - min)) + min}</strong>
        </span>
      </div>
    </Card>
  )
}