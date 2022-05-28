import React from 'react'
import { Database, Detective, EnvelopeOpen, List, X } from 'phosphor-react'

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
  hamburguer: <List {...IconStylesDefault} size={30} weight="light" />,
  detective: <Detective size={45} weight="fill" />,
  envelope: <EnvelopeOpen size={45} weight="light" />,
  database: <Database size={45} weight="light" />
}

const Icon = ({ icon }: IconProps) => (
  <div data-component-icon={true}>{IconList[icon]}</div>
)

export default Icon
