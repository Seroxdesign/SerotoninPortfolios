import React from 'react'
import { Flex } from '@chakra-ui/react'
import ProfileImg from '../../Simple/ProfileImg'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { Heading } from '@chakra-ui/react'
import Typography from '../../Simple/Typography'
import Aboutme from '../../../assets/Data/About/Aboutme'
import styles from './styles.module.css'

const breakpoints = createBreakpoints({
  sm: '320px',
  lg: '1024px',
})

export default function Introduction() {
  return (
    <Flex h={'100%'} w={'100%'} align={'center'} direction={'column'} justify={'center'} paddingTop={{sm: '15vh'}}>
      <ProfileImg img={Aboutme.img}/>
      <Heading color={'#9A44EE'} marginTop={'1em'} marginBottom={'1em'} textAlign={'center'}>{Aboutme.title}</Heading>
      <Typography text={Aboutme.text}/>
    </Flex>
  )
}
