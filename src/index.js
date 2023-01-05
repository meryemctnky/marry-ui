import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  const getType = () => {
    if (props.type === undefined) {
      return "default";
    }
    return props.type;
  };
  const getText = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  };

  const type = getType();
  const text = getText(type);

  return (
    <button
      className={`${styles.btn} ${
        props.type === 'primary'
          ? styles.primary
          : props.type === 'dashed'
          ? styles.dashed
          : props.type === 'link'
          ? styles.link
          : styles.default
      }`}
    >
      {text} Button
    </button>
  )
};

