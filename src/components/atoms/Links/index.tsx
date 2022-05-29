import styles from './styles.module.scss'
import React from 'react'
import { LinkProps } from 'components/atoms/Links/Link'
import Link from 'next/link'

const Links = ({ href, variant = 'default', children }: LinkProps) => {
  const dataNameWithVariant = {
    [`data-variant-${variant}`]: true
  }

  return (
    <Link href={href}>
      <a
        className={styles.wrapper}
        data-component-link={true}
        {...dataNameWithVariant}
      >
        {children}
      </a>
    </Link>
  )
}

export default Links
