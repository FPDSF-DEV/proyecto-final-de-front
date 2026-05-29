import { motion } from 'motion/react';

export default function InsigniasView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex items-center justify-center"
    >
      <div className="block-card max-w-2xl w-full text-center">
        <h2 className="text-xl font-extrabold text-[var(--black)] mb-2">Insignias</h2>
        <p className="text-[0.95rem] text-[var(--text-muted)]">No tiene insignias que mostrar</p>
      </div>
    </motion.div>
  );
}
