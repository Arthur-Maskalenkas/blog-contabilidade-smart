import { ReactNode } from 'react'

export type ButtonVariants = 'default' | 'primary'

type SizeButton =
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'full'
  | 'default'

export interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariants
  size?: SizeButton
  outline?: boolean
}
