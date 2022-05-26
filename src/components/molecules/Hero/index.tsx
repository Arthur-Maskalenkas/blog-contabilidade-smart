import styles from './styles.module.scss'
import React from 'react'
import Button from 'components/atoms/Button'
import Image from 'next/image'

const Hero = () => (
  <section data-component-hero className={styles.wrapper}>
    <div className={styles.leftSide}>
      <h1 className={styles.title}>Contabilidade exclusiva para médicos</h1>
      <p className={styles.description}>
        Abertura da PJ grátis e contabilidade mensal especializada em médicos.
        Cuidamos de tudo para você. Gaste seu tempo no que importa: seus
        pacientes e sua carreira.
      </p>
      <div className={styles.containerButtons}>
        <Button size="full" variant="primary">
          Quero abrir a minha conta pj
        </Button>
        <Button size="full" variant="primary" outline>
          Quero trocar de contador
        </Button>
      </div>
    </div>

    <div className={styles.imgContainer}>
      <Image
        src="https://alume.com/wp-content/uploads/2022/04/contabilidade-hero.png"
        alt="Um medico olhando para o monitor do computador"
        layout="responsive"
        width="100%"
        height="100%"
      />
    </div>
  </section>
)

export default Hero
