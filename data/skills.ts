export interface Skill {
  id: number;
  name: string;
  icon: string;
  level: number;
}

export const skills: Skill[] = [
  { id: 1, name: "React", icon: "/react.jpg", level: 3 },
  { id: 2, name: "Next.js", icon: "/nextjs.jpg", level: 3 },
  { id: 3, name: "TypeScript", icon: "/typescript.png", level: 4 },
  { id: 4, name: "Tailwind CSS", icon: "/tailwind.png", level: 4 },
  { id: 5, name: "JavaScript", icon: "/js.jpg", level: 5 },
  { id: 6, name: "HTML & CSS", icon: "/htmlcss.png", level: 5 },
  { id: 7, name: "Git", icon: "/git.png", level: 5 },
];
