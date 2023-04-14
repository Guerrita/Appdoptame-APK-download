import React from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div>
        <Image width={480} height={480}  src="/appdoptame-min.png" className={styles.footerImage} alt="Aplicacion"/>
      </div>
      <div className={styles.infoSection}>
        <h2>¡Prueba AppDoptame!</h2>
        <h3>Desarrollado por</h3>
        <ul>
          <li>Andrés Guerra</li>
          <li>Sebastian Velez</li>
          <li>Juan Esteban Cardona</li>
        </ul>
        <Image width={480} height={480} src="/Eafit-Blanco.png"  className={styles.eafit} alt="Logo Eafit" />
      </div>

    </footer>
  )
}