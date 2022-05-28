import { ReactNode } from 'react'

type VariantsButton = 'primary' | 'default'
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
  variant?: VariantsButton
  size?: SizeButton
  outline?: boolean
}
