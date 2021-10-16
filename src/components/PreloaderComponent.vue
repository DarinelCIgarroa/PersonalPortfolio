<template>
  <teleport to="body">
    <div class="content" v-show="!isloaded">
      <div v-show="isloaded" class="loader"></div>
      <div class="charging">
        <h1>
          <span class="point">C</span>
          <span class="point">a</span>
          <span class="point">r</span>
          <span class="point">g</span>
          <span class="point">a</span>
          <span class="point">n</span>
          <span class="point">d</span>
          <span class="point">o</span>
          <span class="point">.</span>
          <span class="point">.</span>
          <span class="point">.</span>
        </h1>
      </div>
    </div>
  </teleport>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const isloaded = ref(false);
    onMounted(() => {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          isloaded.value = true;
        }
      };
    });
    return {
      isloaded,
    };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.93);
  height: 100vh;
  width: 100vw;
}
.loader,
.loader::before,
.loader::after {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: load 1.8s ease-in-out infinite;
}

.loader {
  position: relative;
  color: aliceblue;
  animation-delay: -0.16s;
  margin-bottom: 20px;
  top: -50px;
}

.loader::before,
.loader::after {
  position: absolute;
  top: 0;
  content: "";
}

.loader::before {
  left: -56px;
  animation-delay: -0.32s;
}

.loader::after {
  left: 56px;
}

.charging h1 {
  color: aliceblue;
}
.point {
  position: relative;
  animation: point ease 2s infinite;
  display: inline-block;
  transform: translateY(-10px);
}
.charging h1 > span:nth-child(1) {
  animation-delay: -2s;
}
.charging h1 > span:nth-child(2) {
  animation-delay: -1.9s;
}
.charging h1 > span:nth-child(3) {
  animation-delay: -1.8s;
}
.charging h1 > span:nth-child(4) {
  animation-delay: -1.7s;
}
.charging h1 > span:nth-child(5) {
  animation-delay: -1.6s;
}
.charging h1 > span:nth-child(6) {
  animation-delay: -1.5s;
}
.charging h1 > span:nth-child(7) {
  animation-delay: -1.4s;
}
.charging h1 > span:nth-child(8) {
  animation-delay: -1.3s;
}
.charging h1 > span:nth-child(9) {
  animation-delay: -1.2s;
}
.charging h1 > span:nth-child(10) {
  animation-delay: -1.1s;
}
.charging h1 > span:nth-child(11) {
  animation-delay: -1s;
}
@media screen and (max-width: 420px) {
  .loader {
    top: -50px;
  }
}

@keyframes point {
  0%,
  40%,
  100% {
    transform: translateY(-1px);
  }
  20% {
    transform: translateY(-10px);
  }
}
@keyframes rotate-square-2-animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(20%) rotate(22.5deg);
  }
  50% {
    transform: translateY(40%) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 50%;
  }
  75% {
    transform: translateY(20%) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes rotate-square-2-shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}

@keyframes load {
  0%,
  80%,
  100% {
    box-shadow: 0 40px 0 -20px;
  }
  40% {
    box-shadow: 0 40px 0 0;
  }
}
</style>