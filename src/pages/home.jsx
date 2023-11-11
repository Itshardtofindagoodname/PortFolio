import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const [isClear, setIsClear] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsClear(true);
        }, 2000); 
        return () => clearTimeout(timeout);
    }, []);


    return (
        <section className={`h-screen w-screen px-8 py-20 grid grid-cols-1 sm:grid-cols-2 items-center md:gap-10 lg:gap-20 max-w-5xl mx-auto ${isClear ? 'section-clear' : 'section-blur'}`}>
            <div>
                <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
                    Hey There! Nice to meet you
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                    Myself <span className="text-blue-500 font-caveat">Debarjun Thakur</span> and I am<br/> <TypeAnimation
      sequence={[
        'A Front-End Developer',
        1000,
        'A UI/UX Designer',
        1000,

      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2rem', fontFamily: 'Expletus Sans' , display: 'inline-block' }}
      repeat={Infinity}
    />
                </h3>
                <p className="font-inter text-base md:text-lg text-slate-700 mt-10 mb-10 md:my-6">
                    I have always been very keen to learn about web development, knowing the "what if's" and "what else" of anything I get a grasp on. I'm on a journey to constantly refine my skills and stay up-to-date with the latest trends.
                </p>
                <Link to="skills"
                smooth={true}
                spy={true}
                duration={1000}><div className="md:mb-0 mb-20"><NeumorphismButton/></div></Link>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const NeumorphismButton = () => {
    return (
      <button
        className={`
          px-4 py-2 rounded-full 
          flex items-center gap-2 
          text-slate-500
          shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
          
          transition-all
  
          hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
          hover:text-violet-500
      `}
      >
        <FiSend />
        <span>Wanna Know More?</span>
      </button>
    );
  };

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1667842439048-8467075e8dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    },
    {
        id: 2,
        src: "https://i.pinimg.com/564x/19/f8/a8/19f8a84321c334d45a3edab67d61cd4e.jpg",
    },
    {
        id: 3,
        src: "https://i.pinimg.com/564x/be/32/49/be3249ca1fc2fe2dc581e1a0d79decd0.jpg",
    },
    {
        id: 4,
        src: "https://assets-global.website-files.com/5f6cc9cd16d59d990c8fca33/63b6690d985b5c45b8acc295_T-nice-words-2.jpg",

    },

];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-2 grid-rows-2 h-[300px] lg:h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default Hero;