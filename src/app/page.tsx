"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlurPage() {
  const [revealed, setRevealed] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let spinnerTimer: NodeJS.Timeout;
    let redirectTimer: NodeJS.Timeout;

    if (revealed) {
      spinnerTimer = setTimeout(() => setShowSpinner(true), 50);

      redirectTimer = setTimeout(() => router.push("/home"), 1200);
    }

    return () => {
      clearTimeout(spinnerTimer);
      clearTimeout(redirectTimer);
    };
  }, [revealed, router]);

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-neutral-900 overflow-hidden">
      {showSpinner && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-900 z-50 gap-4"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-sm font-medium"
          >
            Loading...
          </motion.p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 1, backdropFilter: "blur(12px)" }}
        animate={{
          opacity: revealed ? 0 : 1,
          backdropFilter: revealed ? "blur(0px)" : "blur(12px)",
        }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-neutral-800/60 backdrop-blur-xl z-10 flex items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex flex-col items-center"
          onClick={() => setRevealed(true)}
        >
          <Eye className="text-white w-20 h-20 flex items-center" />
          <p className="text-gray-300 text-sm mt-4 tracking-wide text-center max-w-xs">
            Are you sure you want to view this content?
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
