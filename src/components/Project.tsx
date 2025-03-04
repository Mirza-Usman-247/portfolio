import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Guess Number",
      href: "https://github.com/Mirza-Usman-247/02_number_guess",

      description:
        "Guess the Number is a fun and interactive web game where players try to guess a randomly generated number within a specified range. Built with Next.js, the project showcases seamless client-side interactivity and server-side rendering capabilities.",
      technologies: ["Typescript", "Next js"],
    },
    {
      title: "Countdown Timer",
      href: "https://github.com/Mirza-Usman-247/01_countdown_timer",
      description:
        "Countdown Timer is a dynamic web application built with Next.js that allows users to set and track time for events, deadlines, or goals. Featuring a clean and responsive design, the timer counts down in real-time, displaying days, hours, minutes, and seconds.",
      technologies: ["Typescript", "Next js"],
    },
    {
      title: "Simple Calculator",
      href: "https://github.com/Mirza-Usman-247/03_simple_calculator",
      description:
        "The Simple Calculator project, built with Next.js, is a web application that performs basic arithmetic operations like addition, subtraction, multiplication, and division. It features a clean, responsive design with an intuitive user interface for seamless interaction.",
      technologies: ["Typescript", "Next js"],
    },
    {
      title: "Weather widget App",
      href: "https://github.com/Mirza-Usman-247/04_weather_widget_app",
      description:
        "A simple and intuitive weather app built with React and WeatherAPI. It provides real-time weather updates, including temperature, location, and weather conditions, for any city you search. Designed with a clean UI using Tailwind CSS, it also features error handling and a loading state for a seamless user experience.",
      technologies: ["Typescript", "Next js"],
    },
  ];

  return (
    <div className="w-full mt-8">
      <h1 className="text-2xl font-bold mb-6 text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-[#2F2F2F] rounded-lg px-5 bg-[#121212] duration-200 ease-in-out text-white py-5 hover:border-[#767676] "
          >
            <div className="flex items-center gap-2 mb-4">
              <Link href={project.href}>
                <h2 className="text-xl font-semibold">{project.title}</h2>
              </Link>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>

            <p
              className="text-[#5D5D5D] text-sm mb-6 md:line-clamp-4"
              style={{ fontFamily: "Inder, sans-serif" }}
            >
              {project.description}
            </p>

            <div className="flex gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-[#0A0A0A] border border-[#2F2F2F] text-center text-[#AFAFAF] px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
