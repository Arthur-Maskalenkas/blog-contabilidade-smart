import Container from 'components/atoms/Container'
import BoxDeal from 'components/molecules/BoxDeal'
import Hero from 'components/molecules/Hero'
import ContainerDeals from 'components/organisms/ContainerDeals'
import React from 'react'
import style from './styles.module.scss'

const HomeTemplate = () => (
  <main data-component-home-template className={style.wrapper}>
    <Container background="secondary">
      <Hero />
    </Container>

    <Container background="primary">
      <ContainerDeals />
    </Container>
  </main>
)

export default HomeTemplate
