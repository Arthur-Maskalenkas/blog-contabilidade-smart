import styles from './styles.module.scss'
import React from 'react'
import { DescriptionProps } from 'components/atoms/Description/Description'

const Description = ({ children }: DescriptionProps) => (
  <p data-component-description={true} className={styles.wrapper}>
    {children}
  </p>
)

export default Description
