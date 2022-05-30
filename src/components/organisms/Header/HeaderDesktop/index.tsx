import styles from 'components/organisms/Header/HeaderDesktop/styles.module.scss'
import React, { useEffect, useState } from 'react'
import Logo from 'components/atoms/Logo'
import { listOfMenuLinks } from 'helpers/data/links-menu'
import Links from 'components/atoms/Links'

const HeaderDesktop = () => {
  const [menuScrolling, setMenuScrolling] = useState<boolean>(false)

  const distanceToMenuScrollAppear = 20

  const changeMenuAppearance = () => {
    if (window.scrollY > distanceToMenuScrollAppear) {
      setMenuScrolling(true)
      return
    }

    setMenuScrolling(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeMenuAppearance)

    return () => window.removeEventListener('scroll', changeMenuAppearance)
  }, [])

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
