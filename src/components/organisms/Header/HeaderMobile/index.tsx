import styles from 'components/organisms/Header/HeaderMobile/styles.module.scss'
import React, { useEffect, useState } from 'react'
import Icon from 'components/atoms/Icon'
import Logo from 'components/atoms/Logo'
import { listOfMenuLinks } from 'helpers/data/links-menu'
import Links from 'components/atoms/Links'

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [menuClosing, setMenuClosing] = useState<boolean>(false)

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

  const handleClick = () => {
    setMenuClosing(true)

    setTimeout(() => {
      setMenuClosing(false)
      setIsOpen(false)
    }, 400)
  }

  const classIsOpen = isOpen ? styles.isOpen : ''
  const classIfMenuClosing = menuClosing ? styles.menuClosing : ''
  const classNameIfMenuScrolling = menuScrolling ? styles.menuScrolling : ''

  return (
    <div className={styles.wrapper}>
      {menuScrolling && <div className={styles.containerToNotAffectScroll} />}
      <div className={`${styles.menuWrapper} ${classNameIfMenuScrolling} `}>
        <Logo isMobile />
        <button onClick={() => setIsOpen(true)} aria-label="Open menu">
          <Icon icon="hamburguer" />
        </button>
        {isOpen && (
          <nav
            className={`${styles.wrapperMenuOpen} ${classIsOpen} ${classIfMenuClosing}`}
          >
            {listOfMenuLinks.map((link, index) => (
              <Links href={link.href} key={index} variant="menu-mobile">
                {link.label}
              </Links>
            ))}
            <button
              data-close-modal={true}
              aria-label="Close menu"
              onClick={() => handleClick()}
            >
              <Icon icon="closeModal" />
            </button>
          </nav>
        )}
      </div>
    </div>
  )
}

export default HeaderMobile
