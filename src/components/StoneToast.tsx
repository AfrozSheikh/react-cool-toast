// StoneToast.tsx
import { motion } from 'framer-motion';

export const StoneToast = ({ message }: { message: string }) => {
  return (
    <motion.div
      initial={{ y: -500, scale: 1.2, rotate: -30 }}
      animate={{ y: 0, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 12,
      }}
      className="px-6 py-4 rounded-full text-white shadow-xl text-sm text-center select-none"
      style={{
        background: `url('/stone-texture.png')`,
        backgroundSize: 'cover',
        border: '2px solid #444',
        minWidth: '250px',
        maxWidth: '400px',
        fontFamily: 'serif',
        fontWeight: 'bold',
        boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
      }}
    >
      🪨 {message}
    </motion.div>
  );
};
