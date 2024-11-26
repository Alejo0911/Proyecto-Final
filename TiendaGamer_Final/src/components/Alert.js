
import React from 'react';

const Alert = ({ type, message }) => {
  const alertStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: type === 'success' ? '#4caf50' : '#f44336',
    textAlign: 'center',
  };

  return <div style={alertStyle}>{message}</div>;
};

export default Alert;
