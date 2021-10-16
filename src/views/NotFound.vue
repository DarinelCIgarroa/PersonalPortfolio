<template>
  <section id="notfound" class="notfound animate__animated animate__fadeInUp">
    <div class="container">
      <div class="content">
        <h2><span>4</span><span>0</span><span>4</span></h2>
        <h4>¡Opps! Página no encontrada</h4>
        <p>
          No existe la página a la que intenta acceder . Puedes estar
          escribiendo mal la dirección o la página ha sido movida
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderNavigation from "@/composables/HeaderNavigation";

export default {
  setup() {
    const { navigationHome } = HeaderNavigation();
    return {
      navigationHome,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.content {
  max-width: 700px;
  margin-top: 30px;
  padding: 12px;
  text-align: center;
}

.content h2 {
  font-size: 12vw;
  color: #fff;
  line-height: 1em;
}
.content h4 {
  position: relative;
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #111;
  background: #fff;
  font-weight: 300;
  padding: 10px 20px;
  display: inline-block;
  margin-top: 40px;
}
.content p {
  color: #fff;
  font-size: 1.2em;
}
.content a {
  position: relative;
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  border-radius: 25px;
  margin-top: 15px;
}
.content h2 > span:nth-child(1) {
  position: relative;
  display: inline-block;
  animation: flotado1 8s infinite linear;
  transform: translateY(0px);
}

.content h2 > span:nth-child(3) {
  position: relative;
  display: inline-block;
  animation: flotado1 8s infinite linear;
  transform: translateY(0px);
  animation-direction: reverse;
}
.content h2 > span:nth-child(2) {
  position: relative;
  display: inline-block;
  animation: flotado2 8s infinite linear;
  transform: translateY(0px);
  animation-direction: reverse;
  animation-delay: 1s;
}


@media screen and (max-width: 768px) {
  .content h2 {
    font-size: 30vw;
  }
  .content h4 {
    font-size: 2.1em;
  }
  .content p {
    font-size: 2.2em;
    margin-top: 20px;
  }
}

@media screen and (max-width: 420px) {
  .content h2 {
    font-size: 25vw;
  }
  .content p{
    font-size: 1.3em;
  }
}


@keyframes flotado1 {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(25px) rotateY(180deg);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes flotado2 {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>