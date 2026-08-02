import { useEffect } from "react";
import { VscAzure } from "react-icons/vsc";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJava, FaLinux, FaNodeJs, FaReact } from "react-icons/fa";
import { SiC, SiCashapp, SiGnubash, SiGo, SiJavascript, SiPostgresql, SiPython, SiShell, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "C", icon: SiC, className: "text-sky-400" },
  { name: "C++", icon: TbBrandCpp, className: "text-sky-400" },
  { name: "TypeScript", icon: SiTypescript, className: "text-blue-600" },
  { name: "C#", icon: TbBrandCSharp, className: "text-purple-400" },
  { name: "Go", icon: SiGo, className: "text-sky-400" },
  { name: "Python", icon: SiPython, className: "text-yellow-200" },
  { name: "React", icon: FaReact, className: "text-sky-400" },
  { name: "NodeJS", icon: FaNodeJs, className: "text-green-500" },
  { name: "Postgresql", icon: SiPostgresql, className: "text-blue-500" },
  { name: "SQLite3", icon: SiSqlite, className: "text-blue-400" },
  { name: "Docker", icon: FaDocker, className: "text-sky-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, className: "text-cyan-400" },
  { name: "Git", icon: FaGitAlt, className: "text-orange-600" },
  { name: "Linux", icon: FaLinux, className: "text-white" },
  { name: "Azure", icon: VscAzure, className: "text-sky-500" },
];

const SkillList = ({ items, ariaHidden = false }) => (
  <ul
    className="flex max-w-max flex-nowrap items-center space-x-8 sm:space-x-16"
    aria-hidden={ariaHidden}
  >
    {items.map((skill) => {
      const Icon = skill.icon;

      return (
        <li key={skill.name} className="shrink-0">
          <div className="flex items-center justify-center rounded-full bg-white/10 p-3 backdrop-blur-sm transition-transform duration-300 hover:scale-110">
            <Icon
              className={`h-10 w-10 sm:h-12 sm:w-12 ${skill.className}`}
              title={skill.name}
              aria-label={skill.name}
            />
          </div>
        </li>
      );
    })}
  </ul>
);

export const Skills = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("#scroller").forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
      });
    }
  }, []);

  return (
    <div className="group flex overflow-hidden" id="scroller">
      <div className="flex animate-loop-scroll items-center gap-8 group-hover:paused sm:gap-16">
        <SkillList items={skills} />
        <SkillList items={skills} ariaHidden />
      </div>
    </div>
  );
};
