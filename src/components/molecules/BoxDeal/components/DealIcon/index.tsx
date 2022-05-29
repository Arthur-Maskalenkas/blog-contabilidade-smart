import styles from 'components/molecules/BoxDeal/components/DealIcon/styles.module.scss'
import React from 'react'
import Icon from 'components/atoms/Icon'
import { DealIconProps } from 'components/molecules/BoxDeal/components/DealIcon/DealIcon'

const DealIcon = ({ icon }: DealIconProps) => (
  <div data-component-deal-icon={true} className={styles.wrapper}>
    <Icon icon={icon} />
  </div>
)

export default DealIcon
