import React from 'react';
import style from './costs.module.scss';
const Costs = ({
  description,
  price,
}: {
  description?: string;
  price: number;
}) => {
  return (
    <div className={style.cost_container}>
      {description && <span>Cost of {description}:</span>}
      <span>{price} lei</span>
    </div>
  );
};

export default Costs;
