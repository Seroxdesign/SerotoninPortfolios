import React from 'react'
import { Flex } from '@chakra-ui/react'
import Header from '../../Simple/Header'
import SecondaryHeader from '../../Simple/SecondaryHeader'
import styles from './styles.module.css'

export default function Landing() {
  return (
    <Flex h={'100%'} w={'100%'} align={'center'} direction={'column'} justify={'center'}>
        <Header heading={"Michael Lines' Portfolio Of Passion."}/>
        <SecondaryHeader heading={"A creative is someone who possess the ability to go into the unknown, draw out from the chaos and make sense of it through their art."}/>
    </Flex>
  )
}
