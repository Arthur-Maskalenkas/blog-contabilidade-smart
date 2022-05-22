import React from 'react'
import { X, List } from 'phosphor-react'

import { IconProps, IconsList, IconStyle } from './icon'

const IconStylesDefault: IconStyle = {
  size: 20,
  color: '#000000',
  alt: 'Icon',
  mirrored: false,
  weight: 'bold'
}

const IconList: IconsList = {
  closeModal: <X {...IconStylesDefault} size={40} />,
  hamburuger: <List {...IconStylesDefault} size={40} />
}

const Icon = ({ icon }: IconProps) => (
  <div data-component-icon>{IconList[icon]}</div>
)

export default Icon
