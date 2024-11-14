// src/components/Alert.type.tsx

/** Tipe pesan yang ditampilkan dalam Alert */
export type AlertType = 'success' | 'error' | 'warning' | 'info';

/** Props yang diperlukan untuk komponen Alert */
export interface AlertProps {
  /** Jenis peringatan yang ditampilkan */
  type: AlertType;
  /** Pesan teks yang muncul di dalam alert */
  message: string;
  /** Callback opsional saat alert ditutup */
  onClose?: () => void;
  /** Menentukan apakah alert memiliki tombol close */
  closable?: boolean;
}
