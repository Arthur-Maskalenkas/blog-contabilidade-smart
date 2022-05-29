import styles from 'components/organisms/Header/HeaderDesktop/styles.module.scss'
import React, { useEffect, useState } from 'react'
import Logo from 'components/atoms/Logo'
import { listOfMenuLinks } from 'helpers/data/links-menu'
import Links from 'components/atoms/Links'

interface menuScrolling {
  isScrolling: boolean
  wasScrolled: boolean
  position: number
}

const HeaderDesktop = () => {
  const distanceToMenuScrollWork = 200
  const distanceToMenuScrollAppear = 900

  const [menuScrolling, setMenuScrolling] = useState<menuScrolling>({
    isScrolling: false,
    position: 0,
    wasScrolled: false
  })

  const changeMenuAppearance = () => {
    if (window.scrollY > distanceToMenuScrollAppear) {
      setMenuScrolling((prevState) => ({
        ...prevState,
        isScrolling: true,
        wasScrolled: true
      }))
    }

    if (window.scrollY > distanceToMenuScrollWork) {
      setMenuScrolling((prevState) => ({
        ...prevState,
        position: window.scrollY
      }))

      return
    }

    setMenuScrolling((v) => ({ ...v, isScrolling: false, wasScrolled: false }))
  }

  useEffect(() => {
    window.addEventListener('scroll', changeMenuAppearance)

    return () => window.removeEventListener('scroll', changeMenuAppearance)
  }, [])

  const classNameIfMenuScrolling = menuScrolling.isScrolling
    ? styles.menuScrolling
    : ''

  const classNameIfMenuWasScrolled = menuScrolling.wasScrolled
    ? styles.menuWasScrolled
    : ''

  const classNameWithPosition =
    menuScrolling.position > distanceToMenuScrollAppear
      ? styles.menuPositionDown
      : styles.menuPositionMiddle

  return (
    <div className={styles.wrapper}>
      {menuScrolling.isScrolling && (
        <div className={styles.containerToNotAffectScroll} />
      )}
      <div
        className={`${styles.menuWrapper} ${classNameIfMenuScrolling} ${classNameWithPosition} ${classNameIfMenuWasScrolled}`}
      >
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
