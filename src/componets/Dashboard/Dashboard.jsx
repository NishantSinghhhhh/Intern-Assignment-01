import React from 'react'
import Button from '../button/button'
import styles from './Dashboard.module.css'
import logo from '../../assets/top-icon.webp'
import { HiMiniHome } from 'react-icons/hi2';
import { AiTwotoneShop } from "react-icons/ai";
import { SiPrintables } from "react-icons/si";
import { CiCreditCard1 } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { SiVirtualbox } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { IoRocketOutline } from "react-icons/io5";
import { IoDiamondSharp } from "react-icons/io5";
import image1 from '../../assets/banner.webp'

const Dashboard = () => {
  return (
    <>
    <div className={styles.dash}>
      <div className={styles.upper}>
      <img className={styles.logo} src={logo} alt="" />
      Soft UI Dashboard
      </div >
      <div className={styles.menu}>
      <Button 
        icon={AiTwotoneShop } 
        text="Dashboard" 
        />
      <Button 
        icon={SiPrintables } 
        text="Tables" 
        />
      <Button 
        icon={CiCreditCard1 } 
        text="Billing" 
        />
      <Button 
        icon={SiVirtualbox } 
        text="Virtual Reality" 
        />
      <Button 
        icon={FaTools } 
        text="RTL" 
        />
    </div>

    <div className={styles.Account}>
      <div className={styles.heading1}>
        Account pages
      </div>
      <div className={styles.menu2}>
     
    <Button 
        icon={MdOutlineSupervisorAccount  } 
        text="Profile" 
        />
    <Button 
        icon={FaBook } 
        text="Sign In" 
        />
    <Button 
        icon={IoRocketOutline} 
        text="Sign Up" 
        />
    </div>
    </div>
    <div>
      <div className={styles.upgrade}>
      <img src={image1}  className={styles.image} />
      <div className={styles.icon2}>

      <IoDiamondSharp />
      </div>
      </div>
    </div>
    </div>
   

        </>
  )
}

export default Dashboard