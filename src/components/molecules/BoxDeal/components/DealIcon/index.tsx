import styles from './styles.module.scss'
import React from 'react'
import Icon from 'components/atoms/Icon'
import { DealIconProps } from './DealIcon'

const DealIcon = ({ icon }: DealIconProps) => (
  <div data-component-deal-icon={true} className={styles.wrapper}>
    <Icon icon={icon} />
  </div>
)

export default DealIcon
