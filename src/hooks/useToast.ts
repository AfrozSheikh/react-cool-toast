import { useToastContext } from '../context/ToastContext';

export const useToast = () => {
  const { addToast } = useToastContext();

  return {
    stone: (message: string) => {
      addToast({ type: 'stone', message });
    },
  };
};
