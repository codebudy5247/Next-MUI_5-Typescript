import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <Typography variant="h1" sx={{mt:50}}>
      Welcome! to the template.
     </Typography>
    </div>
  )
}

export default Home
