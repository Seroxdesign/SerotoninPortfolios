import React from 'react'
import { Heading } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
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
        <Heading size={'lg'} w={{lg: '70%', sm: '90%'}} color={'lightgray'}>A collection of work including Product Design, Social Projects, Fashion Design and Photography.</Heading>
        <SimpleGrid column={2} w={'80%'} spacing={'2em'} marginTop={'3em'} marginBottom={'2em'} h={'100%'}>
            {projectPreviewArray.map((project, i) => {
                return <ProjectCard img={project.img} title={project.title} para={project.para}/>
            })}
        </SimpleGrid>
    </div>
  )
}
