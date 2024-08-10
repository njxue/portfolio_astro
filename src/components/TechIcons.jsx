import { useState } from "react";

const TechIcons = ({ techs }) => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  return (
    <div class="flex flex-row gap-2 flex-wrap items-center h-[50px]">
      {techs?.map((tech) => (
        <div
          class="h-full w-8 flex flex-col justify-center items-center gap-2"
          onMouseEnter={() => {
            setHoveredIcon(tech?.name);
          }}
          onMouseLeave={() => {
            setHoveredIcon("");
          }}
        >
          <img
            class="h-7 grow hover:scale-125 transition-all"
            src={`/icons/${tech?.icon}`}
            alt={tech?.name}
          />
          <div
            class={`${
              hoveredIcon == tech?.name ? "visible" : "invisible"
            } text-[10px] mt-auto whitespace-nowrap techIcon`}
          >
            {tech?.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
