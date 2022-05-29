import styles from 'components/organisms/Header/HeaderMobile/styles.module.scss'
import React, { useState } from 'react'
import Icon from 'components/atoms/Icon'
import Logo from 'components/atoms/Logo'
import { listOfMenuLinks } from 'helpers/data/links-menu'
import Links from 'components/atoms/Links'

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [menuClosing, setMenuClosing] = useState<boolean>(false)

  const handleClick = () => {
    setMenuClosing(true)

    setTimeout(() => {
      setMenuClosing(false)
      setIsOpen(false)
    }, 400)
  }

  const classIsOpen = isOpen ? styles.isOpen : ''
  const classIfMenuClosing = menuClosing ? styles.menuClosing : ''

  return (
    <div className={styles.wrapper}>
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
  )
}

export default HeaderMobile
