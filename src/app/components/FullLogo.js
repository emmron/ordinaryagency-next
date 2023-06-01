// FullLogo.js
import { motion } from "framer-motion";

export default function FullLogo() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="logo-full"
    >
      Ordinary Agency
    </motion.div>
  );
}
