import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const AnimateIn = ({
  children,
  className,
  delay = 0,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: 'some' | 'all' | number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount }}
    transition={{ duration: 1, ease: 'easeOut', delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimateIn;
