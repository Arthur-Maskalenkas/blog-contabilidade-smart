import styles from './styles.module.scss'
import React from 'react'
import ProfilePhoto from 'components/atoms/ProfilePhoto'
import { RecommendationProps } from 'components/molecules/Recommendation/Opinion'

const Recommendation = ({
  opinion,
  location,
  name,
  image
}: RecommendationProps) => (
  <article data-component-opinion={true} className={styles.wrapper}>
    <ProfilePhoto imgUrl={image.href} alt={image.alt} />

    <h3 className={styles.name}>{name}</h3>
    <p className={styles.location}>{location}</p>
    <cite className={styles.opinion}>“{opinion}”</cite>
  </article>
)

export default Recommendation
