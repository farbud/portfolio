export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Mini Store",
    description: "یک فروشگاه کوچک با Next.js و Tailwind که شامل صفحات Home، Product Details، Cart، Checkout و Invoice است." ,
    image: "/shop (1).jpg",
    link: "https://fshop-ctt2.vercel.app",
  },

  {
    id: 3,
    title: "Finance Tracker",
    description: "اپ مدیریت مالی با Next.js، TypeScript و Context API برای پیگیری درآمد و هزینه" ,
    image: "/dashbord.jpg",
    link: "https://finance-tracker-dashbord.vercel.app",
  },
];
