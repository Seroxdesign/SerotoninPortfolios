import React from 'react'
import blogsPrev from '../../../assets/Data/BlogPreviews/blogPreviews'
import ProjectCard from '../../Simple/ProjectCard';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Heading } from '@chakra-ui/react'


import styles from './styles.module.css'


const breakpoints = createBreakpoints({
    sm: '320px',
    lg: '1024px',
})


export default function BlogPreviews() {
  return (
    <div className={styles.blogContainer}>
        <Heading size={'lg'} w={{lg: '70%', sm: '90%'}} color={'lightgray'} marginBottom={'2em'}>A peek into my mind.</Heading>
        {blogsPrev.map((blog, i) => {
                return <ProjectCard direction={'row-reverse'} img={blog.img} title={blog.title} para={blog.para}/>
        })}
    </div>
  )
}

