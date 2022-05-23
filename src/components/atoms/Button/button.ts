import { ReactNode } from 'react'

type VariantsButton = 'primary' | 'default'
type SizeButton = 'small' | 'medium' | 'large' | 'full' | 'default'

export interface ButtonProps {
  children: ReactNode
  variant?: VariantsButton
  size?: SizeButton
  outline?: boolean
}
