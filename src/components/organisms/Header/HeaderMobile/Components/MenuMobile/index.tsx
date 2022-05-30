import styles from 'components/organisms/Header/HeaderMobile/Components/MenuMobile/styles.module.scss'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState
} from 'react'
import { listOfMenuLinks } from 'helpers/data/links-menu'
import Links from 'components/atoms/Links'
import Icon from 'components/atoms/Icon'
import { RefMenuMobileProps } from 'components/organisms/Header/HeaderMobile/Components/MenuMobile/meuMobile'

const MenuMobile: React.ForwardRefRenderFunction<RefMenuMobileProps, any> = (
  props,
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [menuClosing, setMenuClosing] = useState<boolean>(false)

  const handleClick = () => {
    setMenuClosing(true)

    setTimeout(() => {
      setMenuClosing(false)
      setIsOpen(false)
    }, 400)
  }

  const openComponent = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [isOpen])

  useImperativeHandle(ref, () => ({
    openComponent
  }))

  const classIsOpen = isOpen ? styles.isOpen : ''
  const classIfMenuClosing = menuClosing ? styles.menuClosing : ''
  return (
    <div>
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

export default forwardRef(MenuMobile)
