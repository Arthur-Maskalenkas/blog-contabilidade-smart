import React from 'react'
import { X, List, Detective, EnvelopeOpen, Database } from 'phosphor-react'

import { IconProps, IconsList, IconStyle } from './icon'

const IconStylesDefault: IconStyle = {
  size: 20,
  color: '#000000',
  alt: 'Icon',
  mirrored: false,
  weight: 'bold'
}

const IconList: IconsList = {
  closeModal: <X {...IconStylesDefault} size={30} weight="light" />,
  hamburuger: <List {...IconStylesDefault} size={30} weight="light" />,
  detective: <Detective size={45} weight="fill" />,
  envelope: <EnvelopeOpen size={45} weight="light" />,
  database: <Database size={45} weight="light" />
}

const Icon = ({ icon }: IconProps) => (
  <div data-component-icon>{IconList[icon]}</div>
)

export default Icon
