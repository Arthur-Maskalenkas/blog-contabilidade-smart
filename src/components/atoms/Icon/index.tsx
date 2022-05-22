import React from 'react'
import { X } from 'phosphor-react'

import { IconProps, IconsList, IconStyle } from './icon'

const IconStylesDefault: IconStyle = {
  size: 40,
  color: '#000000',
  alt: 'Icon',
  mirrored: false,
  weight: 'bold'
}

const IconList: IconsList = {
  closeModal: <X {...IconStylesDefault} />
}

const Icon = ({ icon }: IconProps) => (
  <div data-component-icon>{IconList[icon]}</div>
)

export default Icon
