import { ReactNode } from 'react'

type BackgroundProps = 'primary' | 'secondary'

export interface ContainerProps {
  children: ReactNode

  background: BackgroundProps
}
