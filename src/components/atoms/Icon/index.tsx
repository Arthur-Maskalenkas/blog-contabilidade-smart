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
  closeModal: <X {...IconStylesDefault} size={30} weight="light" />,
  hamburuger: <List {...IconStylesDefault} size={30} weight="light" />
}

const Icon = ({ icon }: IconProps) => (
  <div data-component-icon>{IconList[icon]}</div>
)

export default Icon
