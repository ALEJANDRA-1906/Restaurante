"use client"; // Indica que este componente es un Client Component
import Image from "next/image"; // Importación correcta del componente Image
import styles from './styles/page.module.css'; // Importación de estilos
import { useState } from "react"; // Importa useState

export default function Home() {
  const [menuActive, setMenuActive] = useState(false); // Estado para el menú
  const [showMore, setShowMore] = useState(false); // Estado para mostrar más información

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Alternar el estado del menú
  };

  return (
    <div className={styles.mainContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <Image src="/logo.png" alt="Restaurante Misku Logo" width={200} height={50} />
          </a>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          &#9776; {/* Ícono de hamburguesa */}
        </div>

        <ul className={`${styles.navLinks} ${menuActive ? styles.active : ''}`}>
          <li><a href="#restaurante" className={styles.reserveBtnN}>RESTAURANTE</a></li>
          <li><a href="#historia" className={styles.reserveBtnN}>HISTORIA</a></li>
          <li><a href="#carta" className={styles.reserveBtnN}>CARTA</a></li>
          <li><a href="#localizacion" className={styles.reserveBtnN}>LOCALIZACION</a></li>
          <li><a href="#reservar" className={styles.reserveBtn}>RESERVAR</a></li>
        </ul>
      </nav>

      <section className={`${styles.heroSection} ${menuActive ? styles.inactive : ''}`} >
        <div className={styles.overlay}></div>
        <div className={styles.content} >
          <h1 className={styles.fondo}> DISFRUTA UN AMBIENTE <span className={styles.unico}>ÚNICO Y ESPECIAL</span></h1>
          <div  className={styles.buttons}>
            <a href="#" className={styles.button}>VER CARTA</a>
            <a href="#" className={styles.buttonYellow}>RESERVAR MESA</a>
          </div>
        </div>          
      </section>

      <section className={styles.descriptionSection} id="restaurante">
        <div className={styles.overlay}></div>
        <div className={styles.descriptionContainer}>
          <h3 >El Restaurante</h3>
          <h1>Siéntete como en casa</h1>
          <p>
            Bienvenido a Restaurante Misku, donde la calidad de nuestros ingredientes y la dedicación de nuestro personal
            se unen para ofrecerte una experiencia gastronómica inigualable. Ven y disfruta de un ambiente acogedor,
            deliciosos platillos y un servicio excepcional.
          </p>
          <p>
            Bienvenido a Restaurante Misku, donde la calidad de nuestros ingredientes y la dedicación de nuestro personal
            se unen para ofrecerte una experiencia gastronómica inigualable. Ven y disfruta de un ambiente acogedor,
            deliciosos platillos y un servicio excepcional.
          </p>
            <a href="#" 
              className={styles.readMoreLink} 
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Leer menos' : 'Leer más'}
            </a>
            {showMore && (
              <div className={styles.additionalInfo}>
                <p>
                  Aquí puedes incluir información adicional sobre el restaurante, como el menú, eventos especiales,
                  o detalles sobre la experiencia que ofreces. 
                </p>
                <p>
                  Ofrecemos una variedad de platillos, desde opciones vegetarianas hasta los más suculentos cortes de
                  carne. Nuestro equipo está listo para hacer de tu visita una experiencia inolvidable.
                </p>
              </div>
            )}
          <div className={styles.reserveBtn}>
          <a className={styles.textob} href="#" >RESERVAR MESA</a> {/* Botón de reservar */}
          </div>
        </div>
      </section>
      <section className={styles.descriptionSectionhistory} id="historia">
        <div className={styles.overlay}></div>
        <div className={styles.descriptionContainerhistory}>
          <h3>Historia</h3>
          <h1>20 años sintiendo la gastronomía</h1>
          <p>
            Bienvenido a Restaurante Misku, donde la calidad de nuestros ingredientes y la dedicación de nuestro personal
            se unen para ofrecerte una experiencia gastronómica inigualable. Ven y disfruta de un ambiente acogedor,
            deliciosos platillos y un servicio excepcional.
          </p>
          <p>
            Bienvenido a Restaurante Misku, donde la calidad de nuestros ingredientes y la dedicación de nuestro personal
            se unen para ofrecerte una experiencia gastronómica inigualable. Ven y disfruta de un ambiente acogedor,
            deliciosos platillos y un servicio excepcional.
          </p>
            <a href="#" 
              className={styles.readMoreLink} 
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Leer menos' : 'Leer más'}
            </a>
            {showMore && (
              <div className={styles.additionalInfo}>
                <p>
                  Aquí puedes incluir información adicional sobre el restaurante, como el menú, eventos especiales,
                  o detalles sobre la experiencia que ofreces. 
                </p>
                <p>
                  Ofrecemos una variedad de platillos, desde opciones vegetarianas hasta los más suculentos cortes de
                  carne. Nuestro equipo está listo para hacer de tu visita una experiencia inolvidable.
                </p>
              </div>
            )}
          <div className={styles.reserveBtn}>
          <a className={styles.textob} href="#" >VER CARTA</a> {/* Botón de reservar */}
          </div>
        </div>
      </section>

      <section className={styles.descriptionSectioncarta} id="carta">
        <div className={styles.overlay}></div>
        <div className={styles.descriptionContainercarta}>
          <h3 >Carta</h3>
          <h1>Descarga nuestras cartas</h1>
          <ul className={styles.menuList}>
            <li>
              Menú del día
              <a href="/path/to/menudelDia.pdf" className={styles.downloadLink}>Descargar PDF</a>
            </li>
            <li>
              Carta para grupos
              <a href="/path/to/cartaGrupos.pdf" className={styles.downloadLink}>Descargar PDF</a>
            </li>
            <li>
              Carta Navidad 2022
              <a href="/path/to/cartaNavidad.pdf" className={styles.downloadLink}>Descargar PDF</a>
            </li>
          </ul>
          
          <div className={styles.reserveBtn}>
            <a className={styles.textob} href="#">RESERVAR MESA</a> {/* Botón de reservar */}
          </div>
        </div>
      </section>
      <section className={styles.reservationSectionlocation} id="localizacion">
        <div className={styles.overlay}></div> 
        <div className={styles.reservationContainerlocation}>
        
          <div className={styles.locationSection}>
            <h3>Localización</h3>
            <h1>Te esperamos</h1>
            <p><strong>Horario</strong></p>
            <p>De Martes a Domingo, de 8:00h a 23:00h.</p>
            <a href="#">Ver calendario de festivos</a>
            <hr className={styles.divider} /> 
            <p><strong>Dirección</strong></p>
            <p>Calle Cualquiera 123, Cualquier Lugar, CP: 12345</p>
            <p><strong>Teléfono</strong></p>
            <p>91-1234-567</p>
            <p><strong>Email</strong></p>
            <p><a href="mailto:hola@unsitiogenial.es">hola@unsitiogenial.es</a></p>
            <p><strong>Redes sociales</strong></p>
            <p><a href="#">@unsitiogenial</a></p>
          </div>

          
          <div className={styles.reservationFormSection} id="reservar">
            <h1>Haz una reserva</h1>
            <p>También puedes reservar por teléfono si lo prefieres.</p>
            <form className={styles.reservationForm}>
              <input type="text" placeholder="Indica el día y la hora" required />
              <input type="number" placeholder="Nº de comensales" required />
              <input type="text" placeholder="Escribe tu nombre" required />
              <input type="tel" placeholder="Tu teléfono" required />
              <button type="submit" className={styles.reserveButton}>RESERVAR</button>
            </form>
          </div>
        </div>
        <footer className={styles.footer}>
          Restaurante ensigna 2022 - <a href="#">Política de privacidad</a>
        </footer>
      </section>

    </div>
  );
}
