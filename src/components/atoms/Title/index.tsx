import styles from './styles.module.scss'
import React from 'react'
import { TitleProps } from './Title'

const Title = ({ children, variation = 'inSection' }: TitleProps) => {
  const classNameWithVariation = `${styles[variation]}`

  return (
    <h1
      data-component-title={true}
      className={`${styles.wrapper} ${classNameWithVariation}`}
    >
      {children}
    </h1>
  )
}

export default Title
