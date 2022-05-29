import { ReactNode } from 'react'

export type TitleVariants = 'default' | 'inSection'

export interface TitleProps {
  children: ReactNode
  variant?: TitleVariants
}
