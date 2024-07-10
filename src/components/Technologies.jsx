import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
     initial: { y: -10},
     animate: {
          y:[10, -10],
          transition: {
               duration: duration,
               ease: "linear",
               repeat: Infinity,
               repeatType: "reverse",
          }
     },
});


const Technologies = () => {
  return (
    <div className='pb-24 border-b border-neutral-800'>
        <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration: 1.5}}
        className='my-20 text-4xl text-center'>
          Technologies
        </motion.h1>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opcaity: 0 , x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className="p-4 border-4 rounded-2xl border-neutral-800">
             <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        
        <motion.div 
           variants={iconVariants(3)}
           initial="initial"
           animate="animate"
        className="p-4 border-4 rounded-2xl border-neutral-800">
          <FaLaravel className="text-7xl" style={{ color: '#ED4F45' }} />
        </motion.div>
        <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
        className="p-4 border-4 rounded-2xl border-neutral-800">
             <FaPhp className='text-7xl text-slate-300'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className="p-4 border-4 rounded-2xl border-neutral-800">
             <RiTailwindCssFill className='text-7xl' style={{color: '#15B8C5'}}/>
        </motion.div>
        <motion.div 
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className="p-4 border-4 rounded-2xl border-neutral-800">
             <RiNextjsLine className='text-7xl'/>
        </motion.div>
        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className="p-4 border-4 rounded-2xl border-neutral-800">
             <DiMysql className='text-7xl text-cyan-400' style={{color: '#015E86'}}/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className="p-4 border-4 rounded-2xl border-neutral-800">
             <SiMongodb className='text-green-500 text-7xl'/>
        </motion.div>
        </motion.div>
        
    </div>
  )
}

export default Technologies