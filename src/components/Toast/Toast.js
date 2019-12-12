import React from 'react';
import styles from './Toast.module.css';
import { connect } from 'react-redux';
import { setToastVisibility } from '../../redux/action-creators';

function Toast(props) {
  // disappear after 5 seconds if user didn't dismiss it before
  setTimeout(() => {
    props.setToastVisibility(false);
  }, 5000);

  return (
    <div className={styles.toast} onClick={() => props.setToastVisibility(false)}>
      {props.message}
    </div>
  );
}

const mapStateToProps = (state) => ({
  message: state.toastMessage
});

export default connect(mapStateToProps, { setToastVisibility })(Toast);
