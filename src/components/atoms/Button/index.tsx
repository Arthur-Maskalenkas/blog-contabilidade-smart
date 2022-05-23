import styles from './styles.module.scss'
import React from 'react'
import { ButtonProps } from './button'

const Button = ({
  children,
  variant = 'default',
  size = 'default',
  outline = false
}: ButtonProps) => {
  const classNameWithVariant = `${styles[variant]}`
  const classNameWithSize = `${styles[size]}`
  const classNameWithOutline = `${styles[outline ? 'outline' : 'default']}`

  return (
    <button
      data-component-button
      className={`${styles.wrapper} ${classNameWithVariant} ${classNameWithSize} ${classNameWithOutline}`}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button
