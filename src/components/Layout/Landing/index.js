import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Header from '../../Simple/Header'
import { ButtonGroup } from '@chakra-ui/react'
import SecondaryHeader from '../../Simple/SecondaryHeader'
import formLinks from '../../../assets/Forms/FormLinks'
import styles from './styles.module.css'

export default function Landing() {
  return (
    <Flex h={'100%'} w={'100%'} align={'center'} direction={'column'} justify={'center'}>
        <img src="https://i.imgur.com/FvACXdx.png" alt="my logo" className={styles.logo}/>
        <Header heading={"Michael Lines Design"}/>
     

        <ButtonGroup marginTop={'3em'}>
          <Link to={"/portfolio"}>
            <button className={styles.btn}>
              View My Work
            </button>
          </Link>

          <a href={`${formLinks.contact_form}`} target={'_blank'} rel={"nonreferrer"}> 
          <button className={styles.btn_invert}>
            Contact Me
          </button>
          </a>
          
        </ButtonGroup>

        <SecondaryHeader heading={'A portfolio of passions.'}/>
    </Flex>
  )
}
