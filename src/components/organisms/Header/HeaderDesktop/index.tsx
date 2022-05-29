import styles from 'components/organisms/Header/HeaderDesktop/styles.module.scss'
import React from 'react'
import Logo from 'components/atoms/Logo'
import { listOfMenuLinks } from 'helpers/data/links-menu'
import Links from 'components/atoms/Links'

const HeaderDesktop = () => (
  <div className={styles.wrapper}>
    <Logo isMobile={false} />

    <nav>
      {listOfMenuLinks.map((link, index) => (
        <Links href={link.href} key={index} variant="header-desktop">
          {link.label}
        </Links>
      ))}
    </nav>
  </div>
)

export default HeaderDesktop
