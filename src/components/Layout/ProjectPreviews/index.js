import React, {useState} from 'react'
import { Heading } from '@chakra-ui/react'
import projectPreviewArray from '../../../assets/Data/Projects/Projectpreviews';
import blogPosts from '../../../assets/Data/BlogPreviews/BlogPost';
import BlogCard from '../../Simple/BlogCard';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import ProjectCard from '../../Simple/ProjectCard';
import styles from './styles.module.css'

const breakpoints = createBreakpoints({
  sm: '320px',
  lg: '1024px',
})



export default function ProjectPreviews() {
  return (
    <div className={styles.container}>
      <Heading size={'lg'} w={{lg: '70%', sm: '90%'}} padding={{sm: '0em', lg: '1em'}} marginLeft={{sm: '0%', lg: '15%'}} textAlign={'center'} color={'lightgray'}>A collection of my works</Heading>
      <hr className={styles.line}></hr>
      <div className={styles.project_grid}>
          {projectPreviewArray.map((project, i) => {
              return <ProjectCard direction={'row'} imgs={project.imgs} img={project.img} title={project.title} para={project.para}/>
          })}
        <div className={styles.blog_container}>
          <Heading size={'lg'} color={'white'} marginBottom={'1.5em'}>My Blog</Heading>
          <div className={styles.blogs}>
            {blogPosts.map((blog, i) => {
              return <BlogCard direction={'row-reverse'} img={blog.img} title={blog.title} para={blog.para}/>
            })}
          </div>
        </div>
          
      </div>
    </div>
  )
}
