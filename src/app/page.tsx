"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlurPage() {
  const [revealed, setRevealed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (revealed) {
      const timer = setTimeout(() => {
        router.push("/home");
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [revealed, router]);

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-neutral-900 overflow-hidden">
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
          <p className="text-gray-300 text-sm mt-4 tracking-wide">
            Are you sure you want to view this content?
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
