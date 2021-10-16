<template>
  <section id="contact" class="contact animate__animated animate__fadeInUp">
    <div class="container">
      <div class="section-title">
        <h2>Contacto</h2>
        <p>Contáctame</p>
      </div>

      <div class="row mt-2">
        <div class="col-md-6 d-flex align-items-stretch">
          <div class="info-box">
             <img src="@/assets/img/contact/address.svg" alt="sociales">
            <h3>Mi dirección</h3>
            <p>Tuxtla Gutiérrez, Chiapas, Colinas del Oriente 29017</p>
          </div>
        </div>

        <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div class="info-box">
              <img src="@/assets/img/contact/share.svg" alt="sociales">
            <h3>perfiles sociales</h3>
            <div class="social-links">
              <a href="https://github.com/DarinelCIgarroa" aria-label="Githud" target="_blank" class="githud"><i class="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/darinel-cigarroa-de-los-santos-548118222/" aria-label="Linkedin" target="_blank" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <img src="@/assets/img/contact/email.svg" alt="correo">
            <h3>Envíeme un correo electrónico</h3>
            <p>darinel_cigarroa@outlook.com</p>
          </div>
        </div>
        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
             <img src="@/assets/img/contact/phone.svg" alt="telefono">
            <h3>Llámame</h3>
            <p>+52 9612365046</p>
          </div>
        </div>
      </div>

      <form
        @submit.prevent="sendEmail"
        ref="form"
        method="post"
        role="form"
        class="js-email-form mt-4"
      >
        <div class="row">
          <div class="col-md-6 form-group">
            <input
              v-model="name"
              type="text"
              name="name"
              class="form-control"
              id="name"
              placeholder="Nombre"
              required
            />
          </div>
          <div class="col-md-6 form-group mt-3 mt-md-0">
            <input
              v-model="email"
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Correo electrónico"
              required
            />
          </div>
        </div>
        <div class="form-group mt-3">
          <input
            v-model="subject"
            type="text"
            class="form-control"
            name="subject"
            id="subject"
            placeholder="Tema"
            required
          />
        </div>
        <div class="form-group mt-3">
          <textarea
            v-model="message"
            class="form-control"
            name="message"
            rows="5"
            placeholder="Mensaje"
            required
          ></textarea>
        </div>
        <div class="my-3">
          <div v-show="loading" class="loading">Cargando</div>
          <div v-show="error" class="error-message text-center">¡Oops! Algo salió mal, lo resolveré en cuanto antes</div>
          <div v-show="successful" class="sent-message">Gracias por escribirme, me contactaré contigo a la brevedad</div>
        </div>
        <div class="text-center">
          <button type="submit">Enviar mensaje</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import {ref} from 'vue'
export default {
  setup(){
    const name = ref("");
    const email = ref("");
    const subject = ref(""); 
    const message = ref(""); 

    const loading = ref(false);
    const successful = ref(false);
    const error = ref(false);
    return {
      name,
      email,
      subject,
      message,
      loading,
      successful,
      error
    }
  },
   methods: {
    sendEmail() {
      this.loading = true;
      emailjs.sendForm('service_4eke9aa', 'template_darinel293', this.$refs.form, 'user_5gP9HHief7s0gKVLxBgbo')
        .then((result) => {
            if(result.text == 'OK'){
              this.name = "";
              this.email =  "";
              this.subject =  ""; 
              this.message = ""; 

              this.loading = false;
              this.error = false;
              this.successful = true;

              console.log('entro ok');
            }
        }, (error) => {
            this.loading = false;
            if(error.status === 400){
              this.successful = false;
              this.error = true;
            }
        });
    }
  }
}
</script>

<style scoped>
.contact .info-box {
  color: #444444;
  padding: 20px;
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
}

.contact .info-box img {
  font-size: 24px;
  border-radius: 50%;
  padding: 14px;
  float: left;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.5s;
}

.contact .info-box h3 {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  margin: 10px 0 8px 68px;
}

.contact .info-box p {
  padding: 0;
  color: #fff;
  line-height: 24px;
  font-size: 14px;
  margin: 0 0 0 68px;
}

.contact .info-box .social-links {
  margin: 5px 0 0 68px;
  display: flex;
}

.contact .info-box .social-links a {
  font-size: 18px;
  display: inline-block;
  color: #fff;
  line-height: 1;
  margin-right: 12px;
  transition: 0.3s;
}

.contact .info-box .social-links a:hover {
  color: #18d26e;
}

.contact .js-email-form {
  padding: 30px;
  background: rgba(255, 255, 255, 0.08);
}

.contact .js-email-form .error-message {
  /* display: none; */
  background: rgba(255, 255, 255, 0.08);
  background: #ed3c0d;
  border-radius: 15px;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .js-email-form .error-message br+br {
  margin-top: 25px;
}

.contact .js-email-form .sent-message {
  background: rgba(255, 255, 255, 0.08);
  background: #18d26e;
  border-radius: 15px;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .js-email-form .loading {
  text-align: center;
  padding: 15px;
}

.contact .js-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.contact .js-email-form input, .contact .js-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 0;
  transition: 0.3s;
  color: #fff;
}

.contact .js-email-form input:focus, .contact .js-email-form textarea:focus {
  background-color: rgba(255, 255, 255, 0.11);
}

.contact .js-email-form input::-webkit-input-placeholder, .contact .js-email-form textarea::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.3);
  opacity: 1;
}

.contact .js-email-form input::-moz-placeholder, .contact .js-email-form textarea::-moz-placeholder {
  color: rgba(255, 255, 255, 0.3);
  opacity: 1;
}

.contact .js-email-form input::placeholder, .contact .js-email-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
  opacity: 1;
}

.contact .js-email-form input {
  padding: 10px 15px;
}

.contact .js-email-form textarea {
  padding: 12px 15px;
}

.contact .js-email-form button[type=submit] {
  background: #18d26e;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
}

.contact .js-email-form button[type=submit]:hover {
  background: #15bb62;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>