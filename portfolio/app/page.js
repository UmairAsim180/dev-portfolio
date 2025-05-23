"use client"
import React from 'react'
import MotionButton from './components/MotionButton'; // Plan to Change this Button looking simple
import { UserRound } from 'lucide-react';
import { File } from 'lucide-react';
import { motion } from "framer-motion";
import { skills } from "./data/skills"
import { projects } from "./data/projects"
import ContactSection from './components/ContactSection';
import RotatingText from "./components/RotatingText"
import Navbar from "./components/Navbar"
import Particles from './components/Particles';
import Waves from "./components/Waves"
import Link from 'next/link';

// For Staggering Items 
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};


export default function Home() {

  return (
    <>
      <section id="home" className="relative h-screen bg-[url('/bg1.jpg')] bg-fixed bg-cover bg-center pt-10">
        <div className='bg-color1 h-full w-full inset-0 absolute opacity-50 z-[0]'></div>
        {/* Navbar  */}
        <Navbar />
        {/* Main Screen  */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.8 }}
          className="flex flex-col gap-5 justify-center items-baseline h-3/4 ml-20  absolute z-[1]"
        >
          {/* Main Name and typewriter  */}

          <div className='text-5xl space-y-3 font-bold text-color6'>
            <h2>
              I'm Umair Asim
            </h2>
            <div className='text-color6 flex justify-center items-center gap-5'>
              <h2>I'm a</h2>
              <RotatingText
                texts={["Developer", "Designer", "Tech Enthusiast", "Problem Solver"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-color4 text-color1 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>

          <p className="text-md mt-5">
            I am a passionate web developer with a knack for creating beautiful and functional websites. I love to learn new technologies and improve my skills every day.
          </p>
          {/* Buttons  */}

          <div className="flex gap-5">
            <MotionButton text="Resume" icon={File} />
            <MotionButton text="Contact" icon={UserRound} />
          </div>
        </motion.div>
      </section>

      <section id='about' className='min-h-screen pt-20 bg-color6 '>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          className='flex flex-col items-center py-4 text-color1'
        >
          {/* Image And Title  */}
          <div className='flex flex-col justify-center items-center'>
            <img src="/personal.png" alt="Umair" className='rounded-full shadow-2xl shadow-black border-white border-4 h-[200px]' />
            <h3 className='text-xl font-semibold mt-5'><span className='text-3xl font-bold'>Umair Asim</span> - Full Stack Developer</h3>
          </div>
          {/* Description About me  */}
          <div className="w-2/3 my-3 text-base text-color2 leading-relaxed tracking-wide">
            <p>
              <span className="block mb-4">
                I'm <strong>Umair Asim</strong>, a passionate and self-taught frontend developer from Pakistan, currently pursuing my intermediate studies.
              </span>
              <span className="block mb-4">
                I specialize in building responsive, high-performance web applications using modern tools like <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
              </span>
              <span className="block mb-4">
                With a strong foundation in HTML, CSS, and JavaScript, I focus on crafting clean, accessible, and visually engaging user interfaces.
              </span>
              <span className="block mb-4">
                I'm constantly exploring new technologies and best practices to grow as a developer. My goal is to join innovative teams at top companies like <strong>Google</strong>.
              </span>
              <span className="block">
                When I’m not coding, I enjoy building side projects, learning design, and exploring UI/UX to sharpen my creative edge.
              </span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills section  */}
      <section id="skills" className='relative z-[0] min-h-screen text-color6 space-y-6 bg-fixed bg-cover p-10 pt-20'>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className={"absolute inset-0 top-0 right-0 z-[-1]"}
        />
        <h2 className='text-3xl font-bold text-color6 text-center'>Skills</h2>

        <div className="w-2/3 mx-auto language space-y-3">
          <h3 className='text-xl font-semibold'>Languages</h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-6 justify-center items-center gap-5"
          >
            {skills.languages.map(({ title, icon }, index) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.8 }}
                  variants={item}
                  key={index}
                  className='flex flex-col justify-center items-center bg-color6 text-color1 rounded-md p-5 w-22 h-22'>
                  <img className='w-20' src={icon} alt={icon} />
                  <span>{title}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <div className="w-2/3 mx-auto frameworks space-y-3 ">
          <h3 className='text-xl font-semibold'>Frameworks</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-6 gap-5"
          >
            {skills.frameworks.map(({ title, icon }, index) => {
              return (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.8 }}
                  className='flex flex-col justify-center items-center bg-color6 text-color1 rounded-md p-5 w-22 h-22'
                >
                  <img className='w-20' src={icon} alt={icon} />
                  <span>{title}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <div className="w-2/3 mx-auto backend space-y-3 ">
          <h3 className='text-xl font-semibold'>Backend</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-6 gap-5"
          >
            {skills.backend.map(({ title, icon }, index) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.8 }}
                  variants={item}
                  key={index}
                  className='flex flex-col justify-center items-center bg-color6 text-color1 rounded-md p-5 w-22 h-22'>
                  <img className='w-20' src={icon} alt={icon} />
                  <span>{title}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
        <div className="w-2/3 mx-auto tools space-y-3 ">
          <h3 className='text-xl font-semibold'>Tools / Utilities</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-6 gap-5"
          >
            {skills.tools.map(({ title, icon }, index) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.8 }}
                  variants={item}
                  key={index}
                  className='flex flex-col justify-center items-center bg-color6 text-color1 rounded-md p-5 w-22 h-22'>
                  <img className='w-20' src={icon} alt={icon} />
                  <span>{title}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

      </section>
      {/* Section of projects  */}
      <section id='projects' className="project h-screen pt-20 p-5 bg-color6">
        <h2 className='text-3xl text-color1 font-bold text-center'>Projects</h2>

        <div className='grid grid-cols-3 gap-8 w-[80%] mx-auto my-5 '>
          {projects.map(({ title, img }, index) => {
            return (
              <Link href={`/project/${title}`} key={index}>
                {/* Link to the project */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.5 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.9 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  key={index}
                  className="border-3 border-[#5AC8FA] rounded-lg h-[200px] p-2 space-y-3 shadow-2xl shadow-gray-700">
                  <img className='rounded-md' src={img} alt={title} />
                  <h2 className='text-xl text-color1 font-semibold text-center'>{title}</h2>
                </motion.div>
              </Link>
            )
          })
          }
        </div>
      </section>
      {/* Contact Section  */}
      <section id="contact" className='relative min-h-screen text-color6 p-6 flex justify-center items-center'>

        <ContactSection />
        <Waves
          lineColor="#fff"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
          className='z-[-1]'
        />
      </section>

    </>
  );
}
