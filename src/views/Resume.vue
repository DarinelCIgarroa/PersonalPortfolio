<template>
  <section id="resume" class="resume section-show animate__animated animate__fadeInUp">
    <div class="container">

      <div class="section-title">
        <h2>Curriculum Vitae</h2>
        <p>REVISA MI CURRÍCULUM</p>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <h3 class="resume-title">Resumen</h3>
          <div class="resume-item pb-0">
            <h4>Darinel Cigarroa De Los Santos</h4>
            <p><em>Concluí la carrera de ingeniería en sistemas computacionales en la universidad Tecnológica de Tuxtla Gutiérrez Chiapas, tengo conocimientos en el desarrollo de aplicaciones web estáticas y dinámicas con PHP nativo y el Framework Laravel, estos conocimientos desarrollados a través de proyectos propios, servicio social y residencia profesional;conocimientos en Css3, html5, SQL, JavaScript, JQuery y el framework VUEJS; busco desarrollar mi carrera contribuyendo con mis habilidades en desarrollo web frontEnd y backend, para lograr los objetivos que satisfagan las necesidades de la empresa.</em></p>
            <p>
            <ul>
              <li>Tuxtla Gutiérrez, Chiapas</li>
              <li>(961) 236-5046</li>
              <li>darinel_cigarroa@outlook.com</li>
            </ul>
            </p>
          </div>

          <h3 class="resume-title">Educación</h3>
          <div class="resume-item">
            <h4> Licenciatura en Ingeniería en Sistemas Computacionales</h4>
            <h5>2015 - 2021</h5>
            <p><em>Tecnológico Nacional de México Campus Tuxtla Gutiérrez</em></p>
            <p>Termine la licenciatura en ingeniería en sistemas computacionales con especialidad en desarrollo de aplicaciones móviles y tecnologías web en el Instituto Nacional de México Campus Tuxtla, egrese en junio del 2021.</p>
          </div>
          <div class="resume-item">
            <h4>Técnico Bachiller en Informatica</h4>
            <h5>2012 - 2015</h5>
            <p><em>Plantel Conalep 069</em></p>
            <p>Estudié la preparatoria en el Plantel Conalep 069, ubicado en la ciudad de Palenque, Chiapas, donde empece a programar y obtener habilidades en manteamiento correctivo y preventivo, egrese en agosto del 2015.</p>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Experiencia profesional</h3>
          <div class="resume-item">
            <h4>Desarrollador web</h4>
            <h5>01/2020 - 06/2020</h5>
            <p><em>CONALEP Chiapa de Corzo Plantel 022</em></p>
            <p>
            <ul>
              <li>Lleve a cabo prototipos para el sistema web, antes de la creación del mismo.</li>
              <li>Maquetación de las diferentes páginas del sistema.</li>
              <li>Diseñé y desarrollé las vistas del sistema.</li>
              <li>Desarrollé logins para los diferentes usuarios.</li>
              <li>Desarrollé la base de datos en SQL.</li>
              <li>Realice varios cruds para el control de alumnos, docentes, avisos etc.</li>
              <li>Exporte datos en Excel a la base de datos.</li>
              <li>Ejecute pruebas para detectar errores en el desempeño del sistema.</li>
            </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>Desarrollador web</h4>
            <h5>06/2019 - 12/2019</h5>
            <p><em>Instituto Electoral de Participación Ciudadana</em></p>
            <p>
            <ul>
              <li>Desarrollé la página de publicación de estrados electrónicos.</li>
              <li>Maquetación de la página estrados electrónicos.</li>
              <li>Implemente diseños de acuerdo a los estándares del IEPC.</li>
              <li>Consumí información de la base de datos para la publicación de los estrados.</li>
              <li>Apoyo al ciclo completo del proyecto.</li>
              <li>Realización de manual de usuarios de la web estrados electrónicos para el área de Unidad Técnica de Transparencia.</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="download-cv">
        <div class="btn"><a download="cv" href="@/assets/cv.pdf">Descargar CV</a></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
}

.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
}

.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #18d26e;
  margin-bottom: 10px;
}

.resume .resume-item h5 {
  font-size: 16px;
  background: rgba(255, 255, 255, 0.15);
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.resume .resume-item ul {
  padding-left: 20px;
}

.resume .resume-item ul li {
  padding-bottom: 10px;
}

.resume .resume-item:last-child {
  padding-bottom: 0;
}

.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #18d26e;
  border: 2px solid #18d26e;
}
.download-cv{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px;
}

.download-cv .btn{
  position: relative;
  width: 155px;
  height: 50px;
  margin: 20px;
}

.download-cv .btn a{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: #fff;
  z-index: 1;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(15px);
}
.download-cv .btn:hover a{
  letter-spacing: 3px;
}
.download-cv .btn a::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255,255,255,0.15),transparent);
  transform: skewX(45deg) translateX(0);
  transition: 0.5s;
}
.download-cv .btn:hover a::before{
  transform: skewX(45deg) translateX(200%);
}
.download-cv .btn::before{
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -5px;
  width: 30px;
  height: 10px;
  background: #1eff45;
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0s;
}
.download-cv .btn:hover::before {
  bottom: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: 0.5s;
}
.download-cv .btn::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -5px;
  width: 30px;
  height: 10px;
  background: #1eff45;
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0s;
}
.download-cv .btn:hover::after {
  top: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: 0.5s;
}
.download-cv .btn::after,
.download-cv .btn::before{
  background: #1eff45;
  box-shadow: 0 0 5px #1eff45,
              0 0 15px #1eff45,
              0 0 30px #1eff45,
              0 0 60px #1eff45;
}
</style>