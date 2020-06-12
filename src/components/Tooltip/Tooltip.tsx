import React from 'react';

import './styles.scss';

export const Tooltip = (props: any) => {
  const className = props.className || '';

  return (
    <div className={`tooltip ${className} `}>
      <div className="tooltip__content">
        {props.children}
      </div>
    </div>
  ) 
}
