import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const AnimateIn = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: 'easeOut', delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimateIn;
