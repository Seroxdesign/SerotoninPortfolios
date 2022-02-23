import React from 'react'
import blogsPrev from '../../../assets/Data/BlogPreviews/blogPreviews'
import BlogCard from '../../Simple/BlogCard';
import { Popover } from '@chakra-ui/react';
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
        <Heading size={'lg'} w={{lg: '70%', sm: '90%'}} color={'lightgray'} marginBottom={'2em'}>My blog.</Heading>
        <div className={styles.blogs}>
        {blogsPrev.map((blog, i) => {
                return <BlogCard direction={'row-reverse'} img={blog.img} title={blog.title} para={blog.para}/>
        })}
        </div>

        <div id={''}>
          <Popover />
        </div>
    </div>
  )
}

