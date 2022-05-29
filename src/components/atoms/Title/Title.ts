import { ReactNode } from 'react'

export type TitleVariants = 'default' | 'insection'

export interface TitleProps {
  children: ReactNode
  variant?: TitleVariants
}
