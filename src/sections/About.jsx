import React from 'react';
import './css_sections/about.css'

const About = () => {
  return (
    <div className="about-container">
      <div>
        <center><h2>About BMW X6 M Competition</h2></center>
        <center><p>High-performance SUV with exceptional design.</p></center>
      </div>
      
      <section className="performance">
        <h3>Rendimiento</h3>
        <p>El BMW X6 M Competition está equipado con un motor V8 TwinPower Turbo que produce 600 HP y 553 lb-ft de torque, permitiendo una aceleración de 0 a 100 km/h en solo 3.8 segundos.</p>
      </section>

      <section className="design">
        <h3>Diseño</h3>
        <p>Combina una silueta musculosa con detalles estilizados, como los faros delanteros láser y una parrilla de riñón negra brillante.</p>
      </section>

      <section className="technology">
        <h3>Tecnología</h3>
        <p>Incluye un sistema de infoentretenimiento de última generación con una pantalla táctil de 12.3 pulgadas, compatibilidad con Apple CarPlay y Android Auto, y un sistema de sonido envolvente Harman Kardon.</p>
      </section>

      <section className="safety">
        <h3>Seguridad</h3>
        <p>Equipado con los más avanzados sistemas de asistencia al conductor, incluyendo control de crucero adaptativo, asistencia de mantenimiento de carril, y frenado automático de emergencia.</p>
      </section>

      <section className="images">
        <h3>Galería</h3>
        <img src="imagen 2.png" alt="Exterior del BMW X6 M Competition" />
        <img src="imagen 5.png" alt="Exterior del BMW X6 M Competition" />
        <img src="imagen 9.png" alt="Interior del BMW X6 M Competition" />
      </section>
    </div>
  );
};

export default About;
