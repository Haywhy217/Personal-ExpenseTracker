import React from 'react'
import styles from './FeatCard.module.css';
import PropTypes from 'prop-types';

const FeatCard = ({title,description}) => {
  return (
    <div className={styles.featCtn}>
      <div className={styles.para}>
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
      
    </div>
  )
}

FeatCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};



export default FeatCard