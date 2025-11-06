"use client";

import { Project } from "../data/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <Link
          href={project.link}
          className="text-blue-500 hover:underline font-semibold"
        >
          مشاهده پروژه
        </Link>
  <Link
    href={project.github}
    target="_blank"
    className="text-gray-400 hover:text-blue-400 hover:underline font-semibold "
  >
    GitHub
  </Link>
      </div>
    </motion.div>
  );
}
