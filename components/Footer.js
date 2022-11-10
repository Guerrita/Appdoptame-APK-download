import React from "react";
import Eafit from "../public/Eafit-Blanco.png"
import Image from 'next/image'
import AppDoptame from "../public/appdoptame.png"
import styles from '../styles/Home.module.scss'


export default function Footer() {

  return(
    <footer className={styles.footer}>
    <div>
      <Image src={AppDoptame} className={styles.footerImage}/>
    </div>
    <div className={styles.infoSection}>
      <h2>¡Prueba AppDoptame!</h2>
      <h6>Desarrollado por</h6>
      <lu>
      <li>Andrés Guerra</li>
      <li>Santiago Puerta</li>
      <li>Juan Muñoz</li>
      </lu>
      <Image src={Eafit} className={styles.eafit} alt="Logo Eafit"/>
      </div>
      
    </footer>
  )
}