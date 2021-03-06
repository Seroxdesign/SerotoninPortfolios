import React from 'react'
import { Flex } from '@chakra-ui/react'
import ProfileImg from '../../Simple/ProfileImg'
import { Heading } from '@chakra-ui/react'
import Typography from '../../Simple/Typography'
import Aboutme from '../../../assets/Data/About/Aboutme'

export default function Introduction() {
  return (
    <Flex h={'100%'} w={'100%'} align={'center'} direction={'column'} justify={'center'} paddingTop={{sm: '3vh'}}>
      <ProfileImg img={Aboutme.img}/>
      <Heading color={'#8015EA'} w={'95%'} marginTop={'1em'} textAlign={'center'}>{Aboutme.title}</Heading>
      <Typography text={Aboutme.text}/>
    </Flex>
  )
}
