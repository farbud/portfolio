"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between  md:gap-20 mt-30 max-w-6xl mx-auto  px-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ">
          👋 سلام، من فربدم
        </h1>
        <p className="text-lg sm:text-xl mb-6">
      توسعه‌دهنده‌ی فرانت‌اند هستم، کارآموز در&nbsp;
          <bdi dir="ltr" className="font-semibold text-blue-500">
            React
          </bdi>{" "}
          و
          <bdi dir="ltr" className="font-semibold text-sky-500">
            Next.js&nbsp;
          </bdi>
          ، عاشق طراحی سایت های سه بعدی و استفاده های متنوع از هوش مصنوعی 🚀
        </p>

        <Link
          href="/projects"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
        >
          مشاهده پروژه‌ها
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center w-full md:w-1/3"
      >
        <Image
          priority
          quality={100}
          width={100}
          height={100}
          src="/profile.jpg"
          alt="Farbod Avatar"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg "
        />
      </motion.div>
    </section>
  );
}
