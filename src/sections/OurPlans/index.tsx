import styles from 'sections/OurPlans/styles.module.scss'
import React from 'react'
import Title from 'components/atoms/Title'
import Image from 'next/image'
import Button from 'components/atoms/Button'

const OurPlans = () => (
  <div data-component-our-plans={true} className={styles.wrapper}>
    <div className={styles.imgContainer}>
      <Image
        src="https://alume.com/wp-content/uploads/2022/04/imagem-assessoria.png"
        alt="Um medico olhando para o monitor do computador"
        layout="responsive"
        width="100%"
        height="100%"
      />
    </div>

    <div className={styles.textContainer}>
      <Title variant="insection">Nosso plano de assessoria mensal</Title>

      <div className={styles.descriptionContainer}>
        <p>
          A nossa assessoria é realizada por especialistas que vão encontrar
          junto a você a melhor forma de gerir as finanças da sua empresa.
          Estamos aqui para simplificar sua vida!
        </p>

        <p>
          Oferecemos um serviço completo de assessoria, desde o momento da
          abertura da PJ até o planejamento e gestão das obrigações fiscais e
          contábeis.
        </p>
      </div>

      <Button size="xlarge" variant="primary">
        Quero abrir minha PJ
      </Button>
    </div>
  </div>
)

export default OurPlans
