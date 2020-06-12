import React from 'react';
import './styles.scss';

export const Button = (props: any) => {
  const className = props.className || ''; 
  const action = props.onClick || null;
  const href = props.href || null;
  const disabled = props.disabled || false;
  const type = props.type || 'button';
  const text = props.text || props.children;

  return href ? (
    <a
      href={href}
      onClick={action} 
      className={`btn ${className}`}
    >
      { props.text }
    </a>
  ) : (
    <button
      onClick={action} 
      className={`btn ${className}`}
      disabled={disabled}
      type={type}
    >
      { text }
    </button>
  ) 
}
