import styles from './styles.module.scss'
import React, { useState } from 'react'
import LinksMenuList from 'components/atoms/LinksMenuList'
import Icon from 'components/atoms/Icon'
import Logo from 'components/atoms/Logo'

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
        <div
          className={`${styles.wrapperMenuOpen} ${classIsOpen} ${classIfMenuClosing}`}
        >
          <LinksMenuList />

          <button
            data-close-modal={true}
            aria-label="Close menu"
            onClick={() => handleClick()}
          >
            <Icon icon="closeModal" />
          </button>
        </div>
      )}
    </div>
  )
}

export default HeaderMobile
