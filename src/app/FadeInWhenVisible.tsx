import { motion } from 'framer-motion';
import useOnScreen from './useOnScreen';

function FadeInWhenVisible({ children }) {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      transition={{ delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
