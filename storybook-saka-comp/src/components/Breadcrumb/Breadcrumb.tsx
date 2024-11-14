// src/components/Breadcrumb.tsx
import React from 'react';
import { BreadcrumbProps } from './Breadcrumb.type';
import { FaHome, FaAngleRight } from 'react-icons/fa';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator }) => {
  const defaultSeparator = <FaAngleRight className="breadcrumb-separator" />; // Separator default

  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={index} className={`breadcrumb-item breadcrumb-item-${item.type}`}>
          {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
          <span className="breadcrumb-text">{item.label}</span>
          {index < items.length - 1 && (
            <span className="breadcrumb-separator">
              {separator || defaultSeparator} {/* Gunakan separator yang diberikan atau default */}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
