// ToastContainer.tsx
import { useToastContext } from '../context/ToastContext';
import { StoneToast } from './StoneToast';

export const ToastContainer = () => {
  const { toasts } = useToastContext();

  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
      {toasts.length > 0 && (
        <StoneToast key={toasts[0].id} message={toasts[0].message} />
      )}
    </div>
  );
};
