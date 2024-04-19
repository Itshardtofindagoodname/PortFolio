import React from "react";
import { ImBookmarks, ImBooks, ImCloud} from "react-icons/im";
import {PiDogFill} from "react-icons/pi";
import {IoGameControllerOutline, IoMedical} from "react-icons/io5"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    return (
        <div className=" p-4 my-20 lg:my-40 mx-auto">
            <p className="text-6xl font-semibold mb-8 md:mb-20 text-center"><span className="font-caveat text-green-400">Projects</span> that I have Build</p>
            <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Card
                    title="Save The Strays"
                    subtitle="Website Built for an Animal Care Organisation"
                    href="https://save-our-strays.netlify.app"
                    Icon={PiDogFill}
                />
                <Card
                    title="Slice It Up"
                    subtitle="A game in a website"
                    href="https://slice-it-up.netlify.app"
                    Icon={IoGameControllerOutline} />
                <Card
                    title="Meaningful Enough"
                    subtitle="My First API integrated Dictionary Website"
                    href="https://meaningful-enough.netlify.app"
                    Icon={ImBooks} />
                <Card
                    title="KingLike"
                    subtitle="One-stop AI spot for everyone (uses Gemini model)"
                    href="https://kinglike.netlify.app"
                    Icon={ImCloud} />
                <Card
                    title="Noted"
                    subtitle="A notes application in Flutter"
                    href="https://www.mediafire.com/file/kvy2nknmboxuuku/Noted.apk/file"
                    Icon={ImBookmarks} />
                <Card
                    title="DotScript"
                    subtitle="An AI based medical information technology"
                    href="https://dotscript.netlify.app"
                    Icon={IoMedical} />
            </div>
        </div>
    );
};

const Card = ({ title, subtitle, Icon, href }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: inView ? 1 : 0 }}
            className="w-full p-4 rounded-xl h-60 border-[1px] border-black relative overflow-hidden group bg-white"
        >
        <a
            href={href}
            target="_blank"
            className="flex flex-col text-center"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-black translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
            
            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-gray-400 group-hover:text-gray-200 group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-6xl text-black group-hover:text-gray-700 transition-colors relative z-10 duration-300" />
            <h3 className="font-medium flex items-center justify-center text-2xl text-slate-950 group-hover:text-white relative z-10 duration-300">
                {title}
            </h3>
            <p className="text-black flex items-center justify-center text-lg group-hover:text-white relative z-10 duration-300">
                {subtitle}
            </p>
        </a>
        </motion.div>
    );
};

export default Projects;
