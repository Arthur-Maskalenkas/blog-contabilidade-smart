import styles from 'components/organisms/Header/HeaderMobile/styles.module.scss'
import React, { useRef } from 'react'
import Icon from 'components/atoms/Icon'
import Logo from 'components/atoms/Logo'

import { HeaderProps } from 'components/organisms/Header/Header'
import { RefMenuMobileProps } from 'components/organisms/Header/HeaderMobile/Components/MenuMobile/meuMobile'
import MenuMobile from 'components/organisms/Header/HeaderMobile/Components/MenuMobile'

const HeaderMobile = ({ menuScrolling }: HeaderProps) => {
  const classNameIfMenuScrolling = menuScrolling ? styles.menuScrolling : ''

  const refMenuMobile = useRef<RefMenuMobileProps>(null)

  const handleOpenMenuMobile = () => {
    refMenuMobile.current?.openComponent()
  }

  return (
    <>
      <MenuMobile ref={refMenuMobile} />
      <div className={styles.wrapper}>
        {menuScrolling && <div className={styles.containerToNotAffectScroll} />}
        <div className={`${styles.menuWrapper} ${classNameIfMenuScrolling} `}>
          <Logo isMobile />
          <button onClick={() => handleOpenMenuMobile()} aria-label="Open menu">
            <Icon icon="hamburguer" />
          </button>
        </div>
      </div>
    </>
  )
}

export default HeaderMobile
