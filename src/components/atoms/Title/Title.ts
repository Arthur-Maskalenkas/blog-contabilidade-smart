import { ReactNode } from 'react'

type VariationProps = 'ourSection' | 'inSection'

export interface TitleProps {
  children: ReactNode
  variation: VariationProps
}
