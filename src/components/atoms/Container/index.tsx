import styles from './styles.module.scss'
import React from 'react'
import { ContainerProps } from './Container'

const Container = ({ children, background = 'primary' }: ContainerProps) => {
  const dataNameResolved = {
    [`data-bg-${background}`]: true
  }

  return (
    <section
      data-component-container={true}
      className={`${styles.wrapper}`}
      {...dataNameResolved}
    >
      {children}
    </section>
  )
}

export default Container
