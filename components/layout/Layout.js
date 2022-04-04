import React from 'react'
import styles from './Layout.module.css'
import User from './User'
import Header from './Header'
import Head from 'next/head'
import Navigation from './Navigation'
import Container from './Container'
import Footer from './Footer'

function Layout({ children }) {


  return (
    <div className={styles.container}>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&family=Red+Hat+Mono:ital,wght@0,300;1,300&display=swap" rel="stylesheet"/> 
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>  
        </Head>
      <User></User>
      <Header></Header>
      <Navigation></Navigation>
      <Container children={children}>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Layout