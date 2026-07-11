import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                boxShadow: [
                  "0 10px 30px rgba(15, 81, 50, 0.2)",
                  "0 25px 45px rgba(15, 81, 50, 0.4)",
                  "0 10px 30px rgba(15, 81, 50, 0.2)"
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 rounded-3xl bg-[#0F5132] flex items-center justify-center mb-6"
            >
              <span className="text-white font-bold text-4xl">SI</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-[#0F5132] tracking-wider"
            >
              SalaryAI
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className="h-1 bg-[#198754] mt-4 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
