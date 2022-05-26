import styles from './styles.module.scss'
import React from 'react'
import Logo from 'components/atoms/Logo'
import LinksMenuList from 'components/atoms/LinksMenuList'

const HeaderDesktop = () => (
  <div className={styles.wrapper}>
    <Logo isMobile={false} />

    <nav>
      <LinksMenuList />
    </nav>
  </div>
)

export default HeaderDesktop
