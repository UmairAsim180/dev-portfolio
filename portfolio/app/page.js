"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react'
import { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "motion/react"
const words = [
  'Turning ideas into reality',
  'Designing digital experiences',
  'Developing modern web apps',
  'Writing scalable code',
  'Solving real-world problems',
  'Loving minimal design',
  'Building with React & Next.js',
  'Learning every day'
]




export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="relative h-screen bg-[url('/bg1.jpg')] bg-fixed bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        {/* Navbar  */}
        <nav className="relative z-10">
          <ul className="flex gap-5 p-5 text-lg text-white">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        {/* Main Screen  */}
        <div data-aos="zoom-in" className="relative z-10 flex flex-col justify-center items-baseline h-3/4 ml-5 text-5xl font-bold text-white">
          <h3>
            I'm Umair Asim
          </h3>
          <div className='text-[#5AC8FA]'>
            <Typewriter words={words} loop cursor cursorStyle='|' cursorColor='##5AC8FA' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
          </div>
          <p className="text-lg mt-5">
            I am a passionate web developer with a knack for creating beautiful and functional websites. I love to learn new technologies and improve my skills every day.
          </p>
          {/* Buttons  */}
          <div className="">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-6 py-2 rounded-xl font-medium transition"
            >
              Resume
            </motion.button>

            {/* <button>resume</button> */}
          </div>
        </div>

      </section>
      <section className='h-screen'>

      </section>

    </>
  );
}
