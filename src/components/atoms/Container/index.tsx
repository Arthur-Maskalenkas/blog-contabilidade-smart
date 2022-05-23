import styles from './styles.module.scss'
import React from 'react'
import { ContainerProps } from './Container'

const Container = ({ children, background = 'primary' }: ContainerProps) => {
  const dataNameResolved = {
    [`data-bg-${background}`]: true
  }

  return (
    <div
      data-component-container
      className={`${styles.wrapper}`}
      {...dataNameResolved}
    >
      {children}
    </div>
  )
}

export default Container
