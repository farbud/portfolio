import { skills } from "../../../data/skills";
import { SkillCard } from "../../../components/SkillCart";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-16">
      {/* Bio */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="leading-relaxed ">
          My name is <b>Farbod</b>, born on <b>October 22, 2000</b>. As a kid, I
          was a professional football player, and my contract is still
          registered with the Tehran Provincial Football Organization. I studied
          experimental sciences in high school and was accepted into Tehran
          Central University for psychology, but I chose to start working
          instead. I became a concert sound engineer and started skateboarding,
          eventually coaching a few students until the COVID pandemic began.
          After that, I served my military duty, during which I started learning
          Python and became interested in backend development. After completing
          my service, I studied German for a year with plans to immigrate, but
          for various reasons, I left that path—and the backend path as well.
          During that time, I worked in different jobs: as a delivery rider, van
          driver, and in a printing house. Eventually, with the help of a few
          programmer friends, I found my way into frontend development. After
          completing Jonas Schmedtmann’s courses on Udemy, studying on YouTube,
          and using AI tools, I now feel ready to step into the world of
          professional programming.
        </p>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}
