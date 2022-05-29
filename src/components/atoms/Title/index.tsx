import styles from './styles.module.scss'
import React from 'react'
import { TitleProps } from './Title'

const Title = ({ children, variant = 'default' }: TitleProps) => {
  const dataNameWithVariant = {
    [`data-variant-${variant}`]: true
  }

  return (
    <h1
      data-component-title={true}
      {...dataNameWithVariant}
      className={styles.wrapper}
    >
      {children}
    </h1>
  )
}

export default Title
