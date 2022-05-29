import { ReactNode } from 'react'

export type LinkVariants = 'default' | 'header-desktop' | 'menu-mobile'

export interface LinkProps {
  href: string
  children: ReactNode

  variant?: LinkVariants
}
