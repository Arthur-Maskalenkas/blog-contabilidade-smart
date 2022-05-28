import { ReactNode } from 'react'

type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'

export interface IconStyle {
  alt?: string
  color?: string
  size?: string | number
  weight?: IconWeight
  mirrored?: boolean
}

export interface IconsList {
  closeModal: ReactNode
  hamburguer: ReactNode
  detective: ReactNode
  envelope: ReactNode
  database: ReactNode
}

export interface IconProps {
  icon: keyof IconsList
}
