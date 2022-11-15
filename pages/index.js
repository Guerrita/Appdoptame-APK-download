import { useState, createContext, useContext } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div>
      <Head>
        <title>AppDoptame</title>
        <meta name="description" content="Aplicación para la adopcion de mascotas" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preload" as="font" />
      </Head>
      <section className={styles.bannerContainer}>
        <Image className={styles.banner} alt="Banner principal" width={480} height={480} src="/banner-appdoptame.png"/>
      </section>

      <section className={styles.instructiones}>
        <h2>Instrucciones para la descarga de AppDoptame</h2>
        <div className={styles.intructionSection}>
          <div className={styles.instructionImpar}><p><span className={styles.instructionesUno} />Debemos dirigirnos a la configuración del celular</p><Image width={480} height={480} className={styles.imageOne} src="/settings-min.png" alt="Configuraciones" /></div>
          <div className={styles.instructionPar}><p><span className={styles.instructionesDos} />Luego buscamos la opción "Instalar apps desconocidas"</p><Image  className={styles.imageTwo} width={480} height={480} src="/unknown-apps-min.png" alt="Instalar apps desconocidas" /></div>
          <div className={styles.instructionImpar}><p><span className={styles.instructionesTres} />Ingresamos a Chrome</p><Image className={styles.imageThree} src="/apps-min.png" width={480} height={480} alt="opcines a habilitar" /></div>
          <div className={styles.instructionPar}><p><span className={styles.instructionesCuatro} />Ahora habilitamos la opción "Confiar en esta fuente"</p><Image width={480} height={480} className={styles.imageFour} src="/chrome-min.png" alt="Chrome" /></div>
          <div className={styles.instructionImpar}><p><span className={styles.instructionesCinco} />Por último descargamos la aplicación</p><a href="/APK/AppDoptame.apk" download="AppDoptame.apk"><button className={styles.bubblybutton} >¡Descarga AppDoptame!</button></a></div>


        </div></section>

      <Footer />
    </div>
  )
}
