import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      className={`${styles.button} ${props.disabled && styles.disabled}`}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};

export default Button;
