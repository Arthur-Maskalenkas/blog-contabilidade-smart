import styles from './styles.module.scss'
import React from 'react'

import HeaderMobile from './HeaderMobile'
import HeaderDesktop from './HeaderDesktop'

const Header = () => (
  <header data-component-header={true} className={styles.wrapper}>
    <HeaderMobile />
    <HeaderDesktop />
  </header>
)

export default Header
