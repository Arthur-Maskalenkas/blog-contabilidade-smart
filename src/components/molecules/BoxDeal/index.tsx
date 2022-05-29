import styles from 'components/molecules/BoxDeal/styles.module.scss'
import React from 'react'
import { BoxDealProps } from 'components/molecules/BoxDeal/Boxdeal'
import Icon from 'components/atoms/Icon'

const BoxDeal = ({ description, icon, title }: BoxDealProps) => (
  <article data-component-box-deal={true} className={styles.wrapper}>
    <Icon icon={icon} variant="deals" />

    <h3>{title}</h3>

    <span>{description}</span>
  </article>
)

export default BoxDeal
