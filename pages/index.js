import { useState, createContext, useContext } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import FormCompleted from "../components/FormCompleted";
import FormCard from "../components/Form";
import banner from "../public/logo_orange_long.png";
import Footer from "../components/Footer";

export default function Home() {

  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div>
      <Head>
      <title>AppDoptame</title>
        <meta name="description" content="Aplicacion para la adopcion de mascotas" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <section className={styles.bannerContainer}>
          <Image className={styles.banner} alt="Banner principal" src={banner}  />
          <button className={styles.bubblybutton}>¡Descarga AppDoptame!</button>
        </section>

        <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        <i class="fa-solid fa-3"></i>
        <p><i class="fa-solid fa-circle-1"></i>Buenos dias empecemos esto</p>
        {formStep == 0 && <div><h2>Bienvenido al tutorial de descarga</h2></div>}
        {formStep == 1 && <FormCompleted />}
        {formStep == 2 && <FormCompleted />}

        {formStep > 2 && <FormCompleted />}
      </FormCard>

        

      </main>

      <Footer/>
    </div>
  )
}
