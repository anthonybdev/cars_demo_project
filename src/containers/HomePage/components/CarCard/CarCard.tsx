import React from 'react';
import { Link } from 'react-router-dom';
import { CarType } from '../../types';
import s from './CarCard.module.scss';

type CardProps = {
  details: CarType;
};

const CarCard: React.FC<CardProps> = ({ details }) => (
  <Link to={`details/${details.id}`} className={s.cardWrapper}>
    <img className={s.cardImage} src={details.image} alt={details.name} />
    <div className={s.cardBody}>
      <h3 className={s.cardTitle}>{details.name}</h3>
      <span className={s.cardType}>Type: {details.typeName}</span>
    </div>
  </Link>
);

export default CarCard;
