"use client"
import React from 'react'
import { useParams } from "next/navigation";
import { notFound } from 'next/navigation'

const Project = () => {
    const {projectName} = useParams()
  return (
    <>
        <h2>{projectName}</h2>
    </>
  )
}

export default Project