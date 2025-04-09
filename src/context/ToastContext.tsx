import { createContext, useContext, useState, ReactNode } from 'react';

type Toast = {
  id: string;
  type: 'stone'; // more types can be added later
  message: string;
};

type ToastContextType = {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

//   const addToast = (toast: Omit<Toast, 'id'>) => {
//     const id = crypto.randomUUID();
//     setToasts(prev => [...prev, { ...toast, id }]);
//     setTimeout(() => {
//       setToasts(prev => prev.filter(t => t.id !== id));
//     }, 4000);
//   };
const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = crypto.randomUUID();
    setToasts([{ ...toast, id }]); // replace instead of appending
  
    setTimeout(() => {
      setToasts([]);
    }, 4000);
  };
  

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToastContext must be used within ToastProvider');
  return context;
};
