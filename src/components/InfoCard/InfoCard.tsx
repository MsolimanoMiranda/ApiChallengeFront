import React from 'react';
import './styles.scss';
import {Button} from './../Button';

export const InfoCard = (props: any) => {
  return (
    <div className="info-card">
      <img className="info-card__img" src={props.image} alt={props.title} />
      <h3 className="info-card__title">{props.title}</h3>
      <ul className="info-card__list">
        {props.children}
      </ul>
      <Button onClick={props.onClick} disabled={props.disabled} type="submit" className="btn btn-action" >
        {props.btnText}
      </Button>
    </div>
  );
}
