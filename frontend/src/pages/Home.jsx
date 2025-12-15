import React from "react";
import "./Cv.css";
import foto from "../assets/foto.png";

export default function Cv() {
  return (
    <div className="cv-container">
      {/* Lado izquierdo: información personal y académica */}
      <div className="cv-left">
        <img src={foto} alt="Jean Pierre Mora" className="cv-photo" />
        
        <section>
          <h2>Datos Personales</h2>
          <p><strong>Teléfono:</strong> +593 987509616</p>
          <p><strong>Email:</strong> mora5252@hotmail.com</p>
          <p><strong>Dirección:</strong> Fray Leonardo Murialdo, Lote 13, Pasaje B, Quito, Pichincha</p>
          <p><strong>Nacionalidad:</strong> Ecuatoriano</p>
          <p><strong>Cédula:</strong> 1723520241</p>
        </section>

        <section>
          <h2>Formación Académica</h2>
          <p><strong>Universidad Católica del Ecuador (PUCE)</strong></p>
          <p>Estudiante de Desarrollo de Software (1 año)</p>
          <p><strong>Bachiller Técnico Informático</strong></p>
        </section>
      </div>

      {/* Lado derecho: perfil, experiencia y habilidades */}
      <div className="cv-right">
        <h1>Jean Pierre Mora Santillan</h1>

        <section>
          <h2>Perfil Profesional</h2>
          <p>
            Soy estudiante de <strong>Desarrollo de Software</strong> en la PUCE con sólida formación técnica en informática. 
            Me apasiona la programación, el desarrollo web y la resolución de problemas mediante tecnología. 
            Tengo experiencia en proyectos académicos y comunitarios, aplicando mis conocimientos en programación, bases de datos y colaboración en equipo.
          </p>
        </section>

        <section>
          <h2>Experiencia</h2>
          <p><strong>Proyecto Académico:</strong> Página web "Arkany" (Wix)</p>
          <p><strong>Duración:</strong> 120 horas</p>
          <p><strong>Responsabilidades:</strong></p>
          <ul>
            <li>Diseño de interfaces básicas en HTML y Python para mejorar la interacción del usuario.</li>
            <li>Colaboración en la planificación y desarrollo de funcionalidades web.</li>
          </ul>
        </section>

        <section>
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li><strong>Lenguajes de programación:</strong> Python, HTML, CSS, (nivel básico)</li>
            <li><strong>Bases de datos:</strong> SQL Server, DBeaver (nivel básico)</li>
            <li><strong>Herramientas:</strong> Visual Studio Code, GitHub</li>
          </ul>
        </section>

        <section>
          <h2>Idiomas</h2>
          <p><strong>Español:</strong> Nativo (C2)</p>
          <p><strong>Inglés:</strong> Básico (A1)</p>
        </section>
      </div>
    </div>
  );
}