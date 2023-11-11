import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div><div className="px-4 py-6 bg-white md:flex md:items-center md:justify-between">
    <span className="text-xl text-black sm:text-center">
        You can also <span className="text-2xl text-purple-400 font-caveat">Find and Follow Me</span> on: 
    </span>
    <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
        <a href="https://github.com/Itshardtofindagoodname" target='_blank' className=" text-3xl hover:text-gray-700 ">
              <FaGithub />
          </a>
          <a href="https://www.instagram.com/pirouette_of_philomel/" target='_blank' className=" text-3xl hover:text-red-900 ">
              <FaInstagram/>
          </a>
          <a href="https://www.linkedin.com/in/debarjun-thakur-313288250/" target='_blank' className=" text-3xl hover:text-blue-900 ">
              <FaLinkedin/>
          </a>
    </div>
  </div></div>
  )
}

export default Footer
