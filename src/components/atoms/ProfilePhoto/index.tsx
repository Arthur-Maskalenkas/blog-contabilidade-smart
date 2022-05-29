import styles from './styles.module.scss'
import React from 'react'
import { ProfilePhotoProps } from 'components/atoms/ProfilePhoto/ProfilePhoto'
import Image from 'next/image'

const ProfilePhoto = ({ imgUrl, alt }: ProfilePhotoProps) => (
  <div data-component-profile-photo={true} className={styles.wrapper}>
    <Image src={imgUrl} alt={alt} layout="fixed" width={135} height={135} />
  </div>
)

export default ProfilePhoto
