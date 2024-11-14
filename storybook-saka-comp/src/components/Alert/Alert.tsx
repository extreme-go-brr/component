// src/components/Alert.tsx
import React from 'react';
import { AlertProps } from './Alert.type';
// Import ikon dari react-icons
import { AiOutlineCheckCircle, AiOutlineExclamationCircle, AiOutlineInfoCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import './Alert.css'; 

const Alert: React.FC<AlertProps> = ({ type, message, closable, onClose }) => {
  // Fungsi untuk menentukan ikon berdasarkan tipe alert
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <AiOutlineCheckCircle className="alert-icon" />;
      case 'error':
        return <AiOutlineCloseCircle className="alert-icon" />;
      case 'warning':
        return <AiOutlineExclamationCircle className="alert-icon" />;
      case 'info':
        return <AiOutlineInfoCircle className="alert-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-icon">{getIcon()}</span>
      <span className="alert-message">{message}</span>
      {closable && (
        <button onClick={onClose} className="alert-close">
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
