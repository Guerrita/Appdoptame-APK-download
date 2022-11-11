import React from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div>
        <Image src="/appdoptame-min.png" className={styles.footerImage} alt="Aplicacion"/>
      </div>
      <div className={styles.infoSection}>
        <h2>¡Prueba AppDoptame!</h2>
        <h3>Desarrollado por</h3>
        <ul>
          <li>Andrés Guerra</li>
          <li>Santiago Puerta</li>
          <li>Juan Muñoz</li>
        </ul>
        <Image src="/Eafit-Blanco.png" className={styles.eafit} alt="Logo Eafit" />
      </div>

    </footer>
  )
}