import React from 'react';
import './css_sections/home.css'; 

export default function Home() {
  return (
    <div className="home-container">
      <center><h2>Welcome to BMW X6 M Competition</h2></center>
      <center><p>"Adéntrese en la excelencia con el BMW X6 M Competition"</p></center>

      <section className="vehicle-description">
        <h3>Descripción del Vehículo</h3>
        <p>El BMW X6 M Competition es la combinación perfecta de lujo y alto rendimiento. Con su diseño audaz y motor potente, este SUV ofrece una experiencia de conducción excepcional.</p>
      </section>

      <section className="features">
        <h3>Características Destacadas</h3>
        <ul>
          <li>Motor V8 TwinPower Turbo</li>
          <li>600 HP y 553 lb-ft de torque</li>
          <li>Interior de lujo con asientos de cuero</li>
          <li>Sistema de entretenimiento de última generación</li>
          <li>Sistema de asistencia al conductor avanzado</li>
        </ul>
      </section>

      <section className="images">
        <h3>Imágenes</h3>
        <img src="imagen 2.png" alt="BMW X6 M Competition exterior" />
        <img src="imagen 9.png" alt="BMW X6 M Competition interior" />
      </section>

      <section className="video"> <h3>Video Promocional</h3> <iframe width="560" height="315" src="https://www.youtube.com/embed/UvhvmTqBTgs" title="BMW X6 M Competition" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe> </section>


      <section className="testimonials">
        <h3>Opiniones de Clientes</h3>
        <blockquote>
          <p>"El BMW X6 M Competition es simplemente increíble. El rendimiento es de primera clase y el lujo es insuperable." - Juan Pérez</p>
        </blockquote>
        <blockquote>
          <p>"Nunca había experimentado un SUV tan potente y elegante. Cada detalle está perfectamente diseñado." - María García</p>
        </blockquote>
      </section>

      <section className="social-media"> 
	      <h3>Síguenos en Redes Sociales</h3> 
	      <div className="social-icons"> 
		      <a href="https://www.facebook.com/BMW" target="_blank" rel="noopener noreferrer"> 
			      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" /> 
			    </a> 
			    <a href="https://www.instagram.com/BMW" target="_blank" rel="noopener noreferrer"> 
			      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" /> 
			    </a> 
			    <a href="https://x.com/BMW" target="_blank" rel="noopener noreferrer"> 
			      <img src="https://1000marcas.net/wp-content/uploads/2019/11/Twitter-Logo.png" alt="Twitter Logo" /> 
			    </a> 
			    <a href="https://www.youtube.com/BMW" target="_blank" rel="noopener noreferrer"> 
			      <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube Logo" /> 
			    </a>
			    <a href="https://www.linkedin.com/company/BMW" target="_blank" rel="noopener noreferrer"> 
			      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" /> 
		      </a> 
	      </div> 
      </section>

    </div>
  );
}
