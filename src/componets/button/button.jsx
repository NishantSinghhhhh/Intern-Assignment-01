import React from 'react';
import styles from './button.module.css';

const Button = ({ icon: Icon, text }) => {
  return (
    <div className={styles.main}>
      <div className={styles.icon1}>
      <div className={styles.icon}>
        {Icon && <Icon />} {/* Render the icon if provided */}
      </div>
      </div>
      <div className={styles.text}>
        {text} {/* Render the text */}
      </div>
    </div>
  );
};

export default Button;
