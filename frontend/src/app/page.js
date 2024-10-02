import Image from "next/image";
import styles from './styles/page.module.css'; // Asumiendo que tienes un archivo de estilos

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/logo.png">
            <Image src="/logo.png" alt="Restaurante Misku Logo" width={200} height={70} />
          </a>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#">Restaurante</a></li>
          <li><a href="#">Historia</a></li>
          <li><a href="#">Carta</a></li>
          <li><a href="#">Localización</a></li>
          <li><a href="#" className={styles.reserveBtn}>Reservar</a></li>
        </ul>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.heroSection}>
          <h1>Disfruta de un ambiente único y especial</h1>
          <div className={styles.buttons}>
            <a href="#" className={styles.button}>Ver Carta</a>
            <a href="#" className={styles.buttonYellow}>Reservar Mesa</a>
          </div>
        </div>
      </main>
    </div>
  );
}
