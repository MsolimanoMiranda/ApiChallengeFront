import React from 'react';
import './styles.scss';

export const RightBox = (props: any) => {
  return (
    <div className={`rightbox ${props.isLoading ? 'is-loading' : ''}`}>
      
      {props.children}

      {props.isLoading &&
        <div className="rightbox__loader">
        </div>
      }
      {props.isLoading &&
        <div className="loading-generic">
          <i className="loading__rotating"></i>
        </div>
      }
    </div>
  );
}
