// src/components/Modal.type.tsx
export type ModalType = 'simple' | 'rounded';

export type ModalSize = 'small' | 'medium' | 'large';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  type?: ModalType;   // simple atau rounded
  size?: ModalSize;   // small, medium, large
}
