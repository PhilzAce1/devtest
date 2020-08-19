import React from 'react';

function Button({ type, children, selected }) {
  return (
    <button
      className={`${type === 'primary' && 'btn btn_primary'} ${
        selected && 'selected'
      }${type === 'secondary' && 'btn btn_secondary'}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
