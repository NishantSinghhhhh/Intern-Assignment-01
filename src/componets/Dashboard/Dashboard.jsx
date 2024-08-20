import React from 'react'
import Button from '../button/button'
import styles from './Dashboard.module.css'
import logo from '../../assets/top-icon.webp'
const Dashboard = () => {
  return (
    <div className={styles.dash}>
      <div className={styles.upper}>
      <img className={styles.logo} src={logo} alt="" />
      Soft UI Dashboard
      </div>
        <Button/>
    </div>
  )
}

export default Dashboard