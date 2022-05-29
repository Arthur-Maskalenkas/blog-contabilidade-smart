import { ReactNode } from 'react'

type DescriptionVariation = 'default'

export interface DescriptionProps {
  children: ReactNode
  variation: DescriptionVariation
}
