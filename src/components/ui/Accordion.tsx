import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

const AccordionItem = ({ title, content, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left hover:text-gray-600 transition-colors"
        style={{
          paddingTop: '10px',
          paddingBottom: '15px'
        }}
      >
        <span className="text-[1.8rem] font-bold text-gray-900" style={{ lineHeight: '1.3em' }}>{title}</span>
        <div
          className="relative flex-shrink-0 transition-transform duration-300"
          style={{
            width: '14px',
            height: '14px',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
          }}
        >
          <div
            className="absolute bg-gray-900"
            style={{
              top: '50%',
              left: '0',
              width: '14px',
              height: '2px',
              transform: 'translateY(-50%)'
            }}
          />
          <div
            className="absolute bg-gray-900"
            style={{
              top: '0',
              left: '50%',
              width: '2px',
              height: '14px',
              transform: 'translateX(-50%)'
            }}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="text-[1.5rem] text-gray-700"
              style={{
                paddingLeft: '20px',
                paddingBottom: '30px',
                lineHeight: '1.3em',
                maxWidth: '300px',
                minWidth: '70%'
              }}
            >
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
