<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <div class="section-title">
        <h2>Portafolio</h2>
        <p>Mis trabajos</p>
      </div>
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li @click="filter('')">Todos</li>
            <li @click="filter('PHP')">Php</li>
            <li @click="filter('JavaScript')">JS</li>
            <li @click="filter('VueJS')">VueJS</li> 
            <li @click="filter('Hibrido')">PHP & VueJS</li> 
            <li @click="filter('Otros')">Otros</li>
          </ul>
        </div>
      </div>
      <div class="row portfolio-container">
        <ProjectComponent v-for="proyecto of proyectos" :key="proyecto.id" :proyecto="proyecto"></ProjectComponent>
      </div>
    </div>
  </section>

</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from "vuex";
import ProjectComponent from "@/components/ProjectComponent.vue";

export default {
  components: {
    ProjectComponent,
  },
  setup() {
    const store = useStore();
    onMounted(()=>{
      store.dispatch("fetchData");
    })
    const proyectos = computed(() => store.state.proyectosFilter);
    const filter = ((tecnologia) =>{
      store.dispatch('filterByTecnologia', tecnologia)
    });
   
    return {
      proyectos,
      filter,
    };
  },
};
</script>

<style scoped>
.portfolio .portfolio-item {
  margin-bottom: 30px;
}

.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 15px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
  padding: 2px 15px;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 16px 10px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 3px 10px 3px;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
}

.portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
  background: #18d26e;
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

.portfolio .portfolio-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
}
</style>