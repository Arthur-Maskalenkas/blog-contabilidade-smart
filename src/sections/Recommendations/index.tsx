import React from 'react'
import Recommendation from 'components/molecules/Recommendation'
import { mockRecommendations } from 'sections/Recommendations/utils'
import styles from './styles.module.scss'
import Title from 'components/atoms/Title'

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <Title>Por que escolher a Alume?</Title>
      <div className={styles.contentWrapper}>
        {mockRecommendations.map((recommendation, index) => (
          <Recommendation key={index} {...recommendation} />
        ))}
      </div>
    </div>
  )
}

export default Recommendations
