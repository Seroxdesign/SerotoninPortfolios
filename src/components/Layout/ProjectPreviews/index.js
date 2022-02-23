import React from 'react'
import { Heading } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import BlogPreviews from '../BlogPreviews';
import projectPreviewArray from '../../../assets/Data/Projects/Projectpreviews';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import ProjectCard from '../../Simple/ProjectCard'
import styles from './styles.module.css'

const breakpoints = createBreakpoints({
  sm: '320px',
  lg: '1024px',
})


export default function ProjectPreviews() {
  return (
    <div className={styles.container}>
        <Heading size={'lg'} w={{lg: '70%', sm: '90%'}} padding={{sm: '0em', lg: '3em'}} marginLeft={{sm: '0%', lg: '15%'}} textAlign={'center'} color={'lightgray'}></Heading>
        <SimpleGrid column={2} w={'80%'} marginLeft={'10%'} spacing={'2em'} marginTop={'3em'} marginBottom={'2em'} h={'100%'}>
            {projectPreviewArray.map((project, i) => {
                return <ProjectCard direction={'row'} img={project.img} title={project.title} para={project.para}/>
            })}
            <BlogPreviews/>
        </SimpleGrid>
    </div>
  )
}
