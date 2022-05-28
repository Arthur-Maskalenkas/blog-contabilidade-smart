import styles from './styles.module.scss'
import React from 'react'
import { TitleProps } from './Title'

const Title = ({ children }: TitleProps) => (
  <div data-component-title={true} className={styles.wrapper}>
    <h1>{children}</h1>
  </div>
)

export default Title
