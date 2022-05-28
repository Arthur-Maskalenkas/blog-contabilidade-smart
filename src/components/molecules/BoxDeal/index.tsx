import styles from './styles.module.scss'
import React from 'react'
import DealIcon from './components/DealIcon'
import { BoxDealProps } from './Boxdeal'

const BoxDeal = ({ description, icon, title }: BoxDealProps) => (
  <article data-component-box-deal={true} className={styles.wrapper}>
    <DealIcon icon={icon} />

    <h3>{title}</h3>

    <span>{description}</span>
  </article>
)

export default BoxDeal
