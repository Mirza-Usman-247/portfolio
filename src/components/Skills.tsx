import { skills } from "@/constant/skills";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full mt-8">
      <h1 className="text-2xl font-bold mb-3 text-white">Skills</h1>

      <div className="flex flex-wrap gap-2">
        {skills.map((val) => {
          return (
            <div
              key={val.id}
              className="bg-[#0A0A0A] border border-[#2F2F2F] text-center text-[#AFAFAF] px-4 py-2 rounded-full text-sm hover:border-[#767676] duration-150 ease-in-out"
              style={{ fontFamily: "Inder, sans-serif" }}
            >
              {val.skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
