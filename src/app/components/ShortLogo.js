// ShortLogo.js
import { motion } from "framer-motion";

export default function ShortLogo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="logo-short"
    >
      OA
    </motion.div>
  );
}
