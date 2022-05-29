import React from 'react'
import Recommendation from 'components/molecules/Recommendation'
import { mockRecommendations } from 'sections/Recommendations/utils'
import styles from './styles.module.scss'

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      {mockRecommendations.map((recommendation, index) => (
        <Recommendation key={index} {...recommendation} />
      ))}
    </div>
  )
}

export default Recommendations
