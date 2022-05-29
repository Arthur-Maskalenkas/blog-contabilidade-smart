import styles from './styles.module.scss'
import React from 'react'
import { ContainerProps } from './Container'

const Container = ({ children, variant }: ContainerProps) => {
  const dataNameWithVariant = {
    [`data-variant-${variant}`]: true
  }

  return (
    <section
      data-component-container={true}
      className={`${styles.wrapper}`}
      {...dataNameWithVariant}
    >
      {children}
    </section>
  )
}

export default Container
