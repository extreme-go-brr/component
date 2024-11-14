// src/components/Modal.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { ModalProps } from './Modal.type';

const meta: Meta<typeof Modal> = {
  title: 'Molecule/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    content: { control: 'text' },
    type: { control: 'select', options: ['simple', 'rounded'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;
export const ModalWithButton: Story = {
    render: (args) => {
      const [isOpen, setIsOpen] = useState(false);
  
      const handleOpenModal = () => setIsOpen(true);
      const handleCloseModal = () => setIsOpen(false);
  
      return (
        <div>
          <button onClick={handleOpenModal}>Open Modal</button>
          <Modal 
            {...args} 
            isOpen={isOpen} 
            onClose={handleCloseModal} 
            title="Example Modal"
            content={<p>This is a modal content.</p>}
          />
        </div>
      );
    },
  };

export const SimpleSmall: Story = {
  args: {
    isOpen: true,
    title: 'Simple Modal (Small)',
    content: 'This is a small modal with a simple design.',
    type: 'simple',
    size: 'small',
  },
};

export const RoundedMedium: Story = {
  args: {
    isOpen: true,
    title: 'Rounded Modal (Medium)',
    content: 'This is a medium modal with rounded corners.',
    type: 'rounded',
    size: 'medium',
  },
};

export const RoundedLarge: Story = {
  args: {
    isOpen: true,
    title: 'Rounded Modal (Large)',
    content: 'This is a large modal with rounded corners.',
    type: 'rounded',
    size: 'large',
  },
};
