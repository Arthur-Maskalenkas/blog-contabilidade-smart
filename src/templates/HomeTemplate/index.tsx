import Container from 'components/atoms/Container'
import Hero from 'sections/Hero'
import Deals from 'sections/Deals'
import React from 'react'
import style from './styles.module.scss'
import OurPlans from 'sections/OurPlans'

const HomeTemplate = () => (
  <main data-component-home-template={true} className={style.wrapper}>
    <Container background={'secondary'}>
      <Hero />
    </Container>

    <Container background={'primary'}>
      <Deals />
    </Container>

    <Container background={'secondary'}>
      <OurPlans />
    </Container>
  </main>
)

export default HomeTemplate
