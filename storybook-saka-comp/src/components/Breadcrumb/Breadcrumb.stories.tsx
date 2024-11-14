// src/components/Breadcrumb.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './Breadcrumb';
import { BreadcrumbProps } from './Breadcrumb.type';
import { FaHome, FaCog, FaInfoCircle, FaChevronRight } from 'react-icons/fa';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Molecule/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
    },
    separator: {
      control: 'text', // Menyediakan opsi untuk memasukkan separator dalam bentuk teks atau ikon
    },
  },
};

export default meta;

type Story = StoryObj<BreadcrumbProps>;

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Home',
        type: 'home',
        icon: <FaHome />,
      },
      {
        label: 'Category',
        type: 'category',
        icon: <FaCog />,
      },
      {
        label: 'Product',
        type: 'product',
        icon: <FaInfoCircle />,
      },
    ],
    separator: '__', 
},
};

export const CustomSeparator: Story = {
  args: {
    items: [
      {
        label: 'Home',
        type: 'home',
        icon: <FaHome />,
      },
      {
        label: 'Category',
        type: 'category',
        icon: <FaCog />,
      },
      {
        label: 'Product',
        type: 'product',
        icon: <FaInfoCircle />,
      },
    ],
    separator: '>', // Menggunakan teks sebagai separator
  },
};

export const NoSeparator: Story = {
  args: {
    items: [
      {
        label: 'Home',
        type: 'home',
        icon: <FaHome />,
      },
      {
        label: 'Category',
        type: 'category',
        icon: <FaCog />,
      },
      {
        label: 'Product',
        type: 'product',
        icon: <FaInfoCircle />,
      },
    ],
    separator: null, // Tidak ada separator
  },
};
