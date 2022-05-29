import { ReactNode } from 'react'

export type ContainerVariants = 'default' | 'secondary'

export interface ContainerProps {
  children: ReactNode
  variant?: ContainerVariants
}
