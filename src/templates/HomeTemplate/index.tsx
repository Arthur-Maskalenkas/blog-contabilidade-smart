import Container from 'components/atoms/Container'
import Hero from 'components/molecules/Hero'
import React from 'react'
import style from './styles.module.scss'

const HomeTemplate = () => (
  <main data-component-home-template className={style.wrapper}>
    <Container background="secondary">
      <Hero />
    </Container>
  </main>
)

export default HomeTemplate
