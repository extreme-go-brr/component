// src/components/Breadcrumb.type.tsx
import { ReactNode } from 'react';

export interface BreadcrumbItem {
  label: string;
  type: 'home' | 'category' | 'product' | 'info'; // Bisa ditambah sesuai kebutuhan
  icon?: ReactNode; // Ikon opsional
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: ReactNode; // Properti untuk mengganti separator
}
