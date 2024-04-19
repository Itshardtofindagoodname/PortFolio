import { motion } from "framer-motion";
import { FiWifi } from "react-icons/fi";
import { BsBatteryHalf } from "react-icons/bs"
import {
    FaReact,
    FaJsSquare,
    FaCss3,
    FaHtml5,
    FaNpm,
    FaCuttlefish,
    FaPython,
    FaGit,
    FaSass,
    FaFigma,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { SiSvelte, SiTailwindcss, SiFlutter } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import {IoCaretBackOutline, IoSquare} from "react-icons/io5"
import {BiSolidHomeAlt2} from "react-icons/bi"
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  return (
    <div className=" flex lg:flex-row flex-col justify-center items-center lg:mt-40 gap-40" id="skills">
        <section className="grid place-content-start lg:mt-0 mt-20">
          <FloatingPhone />
        </section>
         <div className="w-full lg:mt-10 md:w-1/2 p-4">
         <h1 className="mb-10 font-semibold text-5xl">Let's Talk About <span className="font-caveat text-pink-500">What I Know</span></h1>
         <p className="text-lg leading-relaxed font-inter mb-10 mx-2">
             Initially I started my journey in C/C++ as a competitive programmer but over the past year, I've been diving deep into the world of React and Tailwind Css, crafting awesome web applications and user interfaces. I've also been creating projects in HTML, CSS, and JavaScript for three years now, making sure that every line of code I write is pixel-perfect. Recently, I've embarked on an exciting journey to learn Svelte, a new framework that's making waves in the web development scene and I'm also currently trying to master API integration, building bridges between different systems and services. Every text stack I have used till now has been listed <span className="lg:block hidden text-blue-400">On the Side.</span> <span className="lg:hidden block text-blue-400">On the Top.</span>
             <span className="mt-4">You can refer to them or click them to know more about the languages or stacks.</span> 
         </p>
         </div>
    </div>
  );
};

const FloatingPhone = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
});

  return (
    <motion.div ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: inView ? 0.5 : 0 }}>
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-30deg) rotateX(15deg)",
        }}
        className="rounded-[24px] bg-gray-400"
      >
        <motion.div
          initial={{
            transform: "translateZ(8px) translateY(-2px)",
          }}
          animate={{
            transform: "translateZ(32px) translateY(-8px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
          className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
        >
          <HeaderBar />
          <Screen />
        </motion.div>
      </div>
    </motion.div>
  );
};

const HeaderBar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const ISTOptions = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      };
    
      const istTime = currentTime.toLocaleTimeString('en-US', ISTOptions);
  return (
    <>
    <div className="absolute left-4 top-2 z-10 flex">
        <span className="text-white h-1 w-1">{istTime}</span>
        </div>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-white" />
        <BsBatteryHalf className="text-white" />
      </div>
    </>
  );
};

const skillsWithIcons = [
    { name: "React", icon: <FaReact size={30} />, link: "https://reactjs.org" },
    { name: "JavaScript", icon: <FaJsSquare size={30} />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "CSS", icon: <FaCss3 size={30} />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "HTML", icon: <FaHtml5 size={30} />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "npm", icon: <FaNpm size={30} />, link: "https://www.npmjs.com" },
    { name: "C", icon: <FaCuttlefish size={30} />, link: "https://www.learn-c.org/" },
    { name: "Python", icon: <FaPython size={30} />, link: "https://www.python.org" },
    { name: "GitHub", icon: <FaGit size={30} />, link: "https://github.com" },
    { name: "Sass", icon: <FaSass size={30} />, link: "https://sass-lang.com" },
    { name: "Figma", icon: <FaFigma size={30} />, link: "https://www.figma.com" },
    { name: "Api Integration", icon: <TbApi size={30} />, link: "https://aws.amazon.com/what-is/api/#:~:text=API%20stands%20for%20Application%20Programming,other%20using%20requests%20and%20responses." },
    { name: "Svelte", icon: <SiSvelte size={30} />, link: "https://svelte.dev" },
    { name: "Go", icon: <FaGolang size={30} />, link: "https://go.dev" },
    { name: "C++", icon: <TbBrandCpp size={30} />, link: "https://cplusplus.com" },
    { name: "Tailwind", icon: <SiTailwindcss size={30} />, link: "https://tailwindcss.com" },
    { name: "Flutter", icon: <SiFlutter size={30}/>, link: "https://flutter.dev" }
];

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-phone bg-cover">
      <div className="grid grid-row-3 grid-cols-4">{skillsWithIcons.map((skill, index) => (
                    <div
                    key={index}
                    className="text-center"
                >
                        <div className="text-white hover:text-black hover:bg-white hover:ease-in-out duration-300 rounded-full px-2 py-4 mx-auto mb-2">
                            <a href={skill.link} target="_blank" rel="noopener noreferrer">{skill.icon}</a>
                        </div>
                    </div>
                ))}
        </div>
        <div className="absolute bottom-3 left-4 right-4 z-10 text-sm font-medium text-white">
        <div className="flex flex-row justify-evenly">
            <IoCaretBackOutline size={10}/>
            <BiSolidHomeAlt2 size={10}/>
            <IoSquare  size={8}/>
        </div>
      </div>
        <div className="absolute -bottom-72 left-[50%] h-80 w-80 border-[1px] -translate-x-[50%] bg-black" />
    </div>
  );
};

export default Skills;
