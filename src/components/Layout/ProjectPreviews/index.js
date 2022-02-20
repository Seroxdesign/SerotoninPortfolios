import React from 'react'
import { Heading } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import projectPreviewArray from '../../../assets/Data/Projects/Projectpreviews'
import ProjectCard from '../../Simple/ProjectCard'
import styles from './styles.module.css'


export default function ProjectPreviews() {
  return (
    <div className={styles.container}>
        <Heading size={'lg'} w={'70%'} color={'lightgray'}>A collection of work including Product Design, Social Projects, Fashion Design and Photography.</Heading>

        <SimpleGrid column={2} w={'80%'} spacing={'2em'} marginTop={'3em'} marginBottom={'2em'} h={'100%'}>
            {projectPreviewArray.map((project, i) => {
                return <ProjectCard />
            })}
        </SimpleGrid>
    </div>
  )
}
