import React from 'react';
import styles from './CreateJobCard.module.css';
import Button from '../Button/Button';

function CreateJobCard() {
  return (
    <div className={styles.card}>
      <div>
        <div className={`mb-16 ${styles['input-row']}`}>
          <img
            className={`mr-8 ${styles.svg}`}
            src="svg/pickUpBadgeBlank.svg"
            alt=""
          />
          <input
            type="text"
            placeholder="Pick up address"
          />
        </div>
        <div className={`mb-16 ${styles['input-row']}`}>
          <img
            className={`mr-8 ${styles.svg}`}
            src="svg/dropOffBadgeBlank.svg"
            alt=""
          />
          <input
            type="text"
            placeholder="Drop off address"
          />
        </div>
        <div style={{ paddingLeft: '40px' }}>
          <Button>
            Create job
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateJobCard;
