import Container from 'components/atoms/Container'
import Title from 'components/atoms/Title'
import Hero from 'sections/Hero'
import ContainerDeals from 'sections/Deals'
import React from 'react'
import style from './styles.module.scss'
import OurPlans from 'sections/OurPlans'

const HomeTemplate = () => (
  <main data-component-home-template={true} className={style.wrapper}>
    <Container background={'secondary'}>
      <Hero />
    </Container>

    <Container background={'primary'}>
      <Title variation={'ourSection'}>Por que escolher a Alume?</Title>
      <ContainerDeals />
    </Container>

    <Container background={'secondary'}>
      <OurPlans />
    </Container>
  </main>
)

export default HomeTemplate
