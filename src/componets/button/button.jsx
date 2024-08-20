import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
import styles from './button.module.css'
const button = () => {
  return (
    <div className={styles.main}>
        <div className={styles.icon}>
        <HiMiniHome />
        </div>
        ?hii
        <div className={styles.text}>
            Dashboard
        </div>
    </div>
  )
}

export default button