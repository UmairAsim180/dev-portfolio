"use client"
// import { motion } from "motion/react"
import { motion } from "framer-motion";
// import { UserRound } from 'lucide-react';
// import { File } from 'lucide-react';


export default function MotionButton({ text, icon:Icon, className = "" ,...props}) {
    return (

        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={`bg-[#f4f4f5] text-black text-lg rounded-xl p-2 flex gap-1 ${className}`}
            {...props}
        >
            {text}
            {Icon && <Icon />}
        </motion.button>
    )

}