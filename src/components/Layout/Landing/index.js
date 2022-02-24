import React from 'react'
import { Flex } from '@chakra-ui/react'
import Header from '../../Simple/Header'
import { ButtonGroup } from '@chakra-ui/react'
import SecondaryHeader from '../../Simple/SecondaryHeader'
import styles from './styles.module.css'

export default function Landing() {
  return (
    <Flex h={'100%'} w={'100%'} align={'center'} direction={'column'} justify={'center'}>
        <img src="https://i.imgur.com/FvACXdx.png" alt="my logo" className={styles.logo}/>
        <Header heading={"Michael Lines Design"}/>
        <SecondaryHeader heading={'A portfolio of passions.'}/>

        <ButtonGroup marginTop={'3em'}>
          <button className={styles.btn}>
            View My Work
          </button>

          <button className={styles.btn_invert}>
            Contact Me
          </button>
        </ButtonGroup>
    </Flex>
  )
}
