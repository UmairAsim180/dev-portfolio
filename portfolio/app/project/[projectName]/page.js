"use client"
import React from 'react'
import { useParams } from "next/navigation";
import { notFound } from 'next/navigation'

const Project = () => {
    const {projectName} = useParams()
    // redirect to / after 3 sec 
    setTimeout(() => {
        window.location.href = '/'
    }, 3000);
  return (
    <>
        <div className='flex h-screen w-screen justify-center items-center text-3xl text-white'>
          <h2 className='animate-pulse'>Under Construction...</h2>
        </div>
    </>
  )
}

export default Project