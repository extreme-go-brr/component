// src/components/Modal.tsx
import React from 'react';
import { ModalProps } from './Modal.type';
import './Modal.css';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, type = 'simple', size = 'medium' }) => {
  if (!isOpen) return null;

  const modalClass = `modal ${type} ${size}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={modalClass} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
