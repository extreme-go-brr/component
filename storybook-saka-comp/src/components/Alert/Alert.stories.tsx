// src/components/Alert.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';
import { AlertProps } from './Alert.type';

const meta: Meta<typeof Alert> = {
  title: 'Molecule/Alert',
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    type: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    closable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<AlertProps>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'This is a success alert',
    closable: true,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'This is an error alert',
    closable: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'This is a warning alert',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'This is an info alert',
  },
};
