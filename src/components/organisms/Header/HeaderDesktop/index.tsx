import styles from 'components/organisms/Header/HeaderDesktop/styles.module.scss'
import React from 'react'
import Logo from 'components/atoms/Logo'
import { listOfMenuLinks } from 'helpers/data/links-menu'
import Links from 'components/atoms/Links'
import { HeaderProps } from 'components/organisms/Header/Header'

const HeaderDesktop = ({ menuScrolling }: HeaderProps) => {
  const classNameIfMenuScrolling = menuScrolling ? styles.menuScrolling : ''

  return (
    <div className={styles.wrapper}>
      {menuScrolling && <div className={styles.containerToNotAffectScroll} />}
      <div className={`${styles.menuWrapper} ${classNameIfMenuScrolling} `}>
        <div className={`${styles.contentWrapper}`}>
          <Logo isMobile={false} />

          <nav>
            {listOfMenuLinks.map((link, index) => (
              <Links href={link.href} key={index} variant="header-desktop">
                {link.label}
              </Links>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HeaderDesktop
