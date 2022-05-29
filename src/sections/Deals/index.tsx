import styles from 'sections/Deals/styles.module.scss'
import React from 'react'
import BoxDeal from 'components/molecules/BoxDeal'
import Title from 'components/atoms/Title'

const Deals = () => (
  <>
    <Title variation={'ourSection'}>Por que escolher a Alume?</Title>

    <div className={styles.dealsWrapper}>
      <BoxDeal
        title="Segurança e controle"
        description="Consulte os dados da contabilidade quando e onde precisar com segurança e transparência!"
        icon="detective"
      />

      <BoxDeal
        title="Obrigações legais"
        description="Elaboramos e transmitimos todas obrigações legais com a Receita Federal e Prefeitura."
        icon="envelope"
      />

      <BoxDeal
        title="Impostos"
        description="Calculamos todos os seus impostos e emissão de guias."
        icon="database"
      />

      <BoxDeal
        title="Segurança e controle"
        description="Consulte os dados da contabilidade quando e onde precisar com segurança e transparência!"
        icon="detective"
      />

      <BoxDeal
        title="Obrigações legais"
        description="Elaboramos e transmitimos todas obrigações legais com a Receita Federal e Prefeitura."
        icon="envelope"
      />

      <BoxDeal
        title="Impostos"
        description="Calculamos todos os seus impostos e emissão de guias."
        icon="database"
      />
    </div>
  </>
)

export default Deals
