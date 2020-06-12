import React from 'react';
import './styles.scss';

export const CheckCard = (props: any) => {
  const action = props.onClick;
  
  return (
    <div onClick={action} className={`complete-card${props.isCompleted ? ' is-completed' : '' }${props.isAmount ? ' is-amount' : '' }`}>
      <div className="complete-card__control">
        {props.image && 
          <img src={props.image} alt={props.firstLabel + props.secondLabel} />
        }
        <span>{props.firstLabel}
            {props.secondLabel &&
              <strong>{props.secondLabel}</strong>
            }
        </span>
        <div className="complete">{props.checkInitial}<i className="icon-arrow-next"></i></div>
        <div className="complete-hidden">{props.checkDone}</div>
      </div>
    </div>
  );
}
