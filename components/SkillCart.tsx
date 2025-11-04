import { Star } from "lucide-react";
import Image from "next/image";
interface SkillCardProps {
  name: string;
  icon: string;
  level: number; // 1 تا 5
}

export function SkillCard({ name, icon, level }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center bg-neutral-800/60 p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="text-4xl mb-2 text-white rounded-3xl">
        <Image
          src={icon}
          width={100}
          height={100}
          alt="icon"
          className="rounded-xl"
        ></Image>
      </div>
      <h3 className="text-white font-semibold text-sm mb-3">{name}</h3>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-yellow-400 rounded-full transition-all duration-700"
          style={{ width: `${(level / 5) * 100}%` }}
        />
      </div>

      {/* ستاره‌ها */}
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < level ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
            }
          />
        ))}
      </div>
    </div>
  );
}
