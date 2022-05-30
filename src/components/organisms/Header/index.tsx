import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react'

import HeaderMobile from './HeaderMobile'
import HeaderDesktop from './HeaderDesktop'

const Header = () => {
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

  return (
    <header data-component-header={true} className={styles.wrapper}>
      <HeaderMobile menuScrolling={menuScrolling} />
      <HeaderDesktop menuScrolling={menuScrolling} />
    </header>
  )
}
export default Header
