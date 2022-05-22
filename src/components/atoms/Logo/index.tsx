import React from 'react'
import { LogoProps } from './Logo'
import LogoMobile from './components/LogoMobile'
import LogoDesktop from './components/LogoDesktop'

import styles from './styles.module.scss'

const Logo = ({ isMobile }: LogoProps) => (
  <div className={styles.wrapper} data-component-logo>
    {isMobile ? <LogoMobile /> : <LogoDesktop />}
  </div>
)

export default Logo
