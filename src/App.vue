<template>
  <PreloaderComponent />
  <div class="content-video">
    <video autoplay loop muted playsinline poster="@/assets/img/black.jpg">
      <source src="@/assets/video/humo-opt.mp4" type="video/mp4" />
    </video>
  </div>

  <header id="header">
    <div class="container">
      <h1 @click="navigationHome">
        <router-link :to="{ name: 'Home' }"
          >Darinel Cigarroa De Los Santos</router-link
        >
      </h1>
      <h2>
        Soy un apasionado del<span> desarrollo web </span>frontend y backend
      </h2>
      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <router-link
              @click="navigationHome"
              active-class="active"
              class="nav-link"
              :to="{ name: 'Home' }"
              >Inicio</router-link
            >
          </li>
          <li>
            <router-link
              @click="navigation"
              active-class="active"
              class="nav-link"
              :to="{ name: 'About' }"
              >Sobre Mi</router-link
            >
          </li>
          <li>
            <router-link
              @click="navigation"
              active-class="active"
              class="nav-link"
              :to="{ name: 'Cv' }"
              >CV</router-link
            >
          </li>
          <li>
            <router-link
              @click="navigation"
              active-class="active"
              class="nav-link"
              :to="{ name: 'Portafolio' }"
              >Portafolio</router-link
            >
          </li>

          <li>
            <router-link
              @click="navigation"
              active-class="active"
              class="nav-link"
              :to="{ name: 'Contact' }"
              >Contacto</router-link
            >
          </li>
        </ul>
        <i
          @click="nav_toggler"
          class="
            bi
            mobile-nav-toggle
            bi-list
            animate__animated animate__heartBeat animate__delay-3s
          "
        ></i>
      </nav>
    </div>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import PreloaderComponent from "@/components/PreloaderComponent";
import HeaderNavigation from "@/composables/HeaderNavigation";
import { onMounted } from "vue";

export default {
  components: {
    PreloaderComponent,
  },
  setup() {
    const { nav_toggler, navigationHome, navigation } = HeaderNavigation();
    onMounted(() => {
      const pathName = window.location.pathname;
      if (pathName !== "/") {
        let header = document.querySelector("#header");
        header.classList.add("header_top");
      }
    });
    return {
      navigation,
      navigationHome,
      nav_toggler,
    };
  },
};
</script>

<style>
@import "./assets/bootstrap/icons.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

html,
body {
  font-family: "Open Sans", sans-serif;
  background-color: #040404;
  color: #fff !important;
  position: relative;
  background: transparent;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(#086cbe59, #1357d6);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(#1357d654, #6810db);
}

body::before {
  content: "";
  position: fixed;
  background: #040404;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

@media (min-width: 1024px) {
  body::before {
    background-attachment: fixed;
  }
}

a {
  color: #18d26e;
  text-decoration: none;
}

a:hover {
  color: #35e888;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

.content-video {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.content-video video {
  position: absolute;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

#header {
  transition: ease-in-out 0.3s;
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  overflow-y: auto;
  overflow: hidden;
}

#header * {
  transition: ease-in-out 0.3s;
}

#header h1 {
  font-size: 28px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
}

#header h1 a,
#header h1 a:hover {
  color: #fff;
  text-decoration: none;
  line-height: 1;
  display: inline-block;
}

#header h2 {
  font-size: 24px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
}

#header h2 span {
  color: #fff;
  border-bottom: 2px solid #18d26e;
  padding-bottom: 1px;
}

#header .social-links {
  margin-top: 40px;
  display: flex;
}

#header .social-links a {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  line-height: 1;
  margin-right: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

#header .social-links a:hover {
  background: #18d26e;
}

@media screen and (max-width: 1024px) {
  #header h1 {
    font-size: 34px;
  }

  #header .container {
    margin: 0px 70px;
  }

  #header.header_top h1 {
    font-size: 25px !important;
  }
}

@media screen and (max-width: 992px) {
  #header h1 {
    font-size: 30px;
  }
  #header.header_top h1 {
    font-size: 20px !important;
    margin-top: 5px;
  }
  #header h2 {
    font-size: 25px;
    line-height: 45px;
  }
  #header .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 420px) {
  #header h1 {
    font-size: 20px !important;
    margin-top: 15px;
  }
  #header h2 {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
  .navbar-mobile a.nav-link {
    font-size: 30px;
  }
  .navbar a:before {
    width: 60px !important;
  }
}

@media screen and (max-width: 360px) {
  #header h1 {
    font-size: 15px !important;
  }
  #header.header_top h1 {
    font-size: 15px !important;
  }
  #header h2 {
    font-size: 16px;
    line-height: 30px;
    text-align: center;
  }
  .navbar-mobile a.nav-link {
    font-size: 20px;
  }
}

#header.header_top {
  height: 60px;
  left: 0;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
}

#header.header_top .social-links,
#header.header_top h2 {
  display: none;
}

#header.header_top h1 {
  margin-right: auto;
  font-size: 30px;
}

#header.header_top .container {
  display: flex;
  align-items: center;
}

#header.header_top .navbar {
  margin: 0;
}

@media (max-width: 768px) {
  #header.header-top {
    height: 60px;
  }
  #header.header-top h1 {
    font-size: 26px;
  }
}

.navbar {
  padding: 0;
  margin-top: 35px;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar li + li {
  margin-left: 30px;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #18d26e;
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out 0s;
}

.navbar a:hover:before,
.navbar li:hover > a:before,
.navbar .active:before {
  visibility: visible;
  width: 25px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  color: #fff;
}

.mobile-nav-toggle {
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 200;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }
  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  position: fixed !important;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  transition: 0.3s;
  z-index: 999;
  margin-top: 0;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 45px;
  left: 15px;
  padding: 10px 0;
  overflow-y: auto;
  transition: 0.3s;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.navbar-mobile li {
  padding: 12px 20px;
}

.navbar-mobile li + li {
  margin: 0;
}

.navbar-mobile a,
.navbar-mobile a:focus {
  font-size: 16px;
  position: relative;
}

section {
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 100px;
  bottom: auto;
  transition: ease-in-out 0.4s;
  padding-bottom: 50px;
  z-index: 100;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

section .container {
  background: rgba(0, 0, 0, 0.9);
  padding: 30px;
}

@media (max-width: 768px) {
  section {
    top: 90px;
  }
  section.section-show {
    top: 80px;
  }
}

@media (max-width: 360px) {
  .section-title h2::after {
    width: 70px !important;
  }
}

.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #aaaaaa;
  font-family: "Poppins", sans-serif;
}

.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #4ceb95;
  margin: 4px 10px;
}

.section-title p {
  margin: 0;
  margin: -15px 0 15px 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #fff;
}
</style>