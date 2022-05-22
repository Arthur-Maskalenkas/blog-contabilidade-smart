import styles from './styles.module.scss'
import React from 'react'
import HeaderMobile from './components/HeaderMobile'

const Header = () => (
  <header data-component-header className={styles.wrapper}>
    <HeaderMobile />
  </header>
)

export default Header
