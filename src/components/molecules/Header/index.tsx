import styles from './styles.module.scss'
import React from 'react'
import HeaderMobile from './components/HeaderMobile'
import HeaderDesktop from './components/HeaderDesktop'

const Header = () => (
  <header data-component-header className={styles.wrapper}>
    <HeaderMobile />
    <HeaderDesktop />
  </header>
)

export default Header
