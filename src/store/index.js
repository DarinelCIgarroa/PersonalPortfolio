import { createStore } from 'vuex'

export default createStore({
  state: {
    proyectos:[],
    proyectosFilter:[],
  },
  mutations: {
    setProyectos(state, payload){
      state.proyectos = payload;
    },
    setProyectosFilter(state, payload){
      state.proyectosFilter = payload;
    }
  },
  actions: {
    async fetchData({commit}){
      try {
        const response = await fetch('projects.json');
        const data = await response.json();
        commit('setProyectos', data);
        commit('setProyectosFilter', data);
      } catch (error) {
        console.error(error)
      }
    },
    filterByTecnologia({commit,state},tecnologia){
     const results = state.proyectos.filter(proyecto => proyecto.tecnologia.includes(tecnologia));
     commit('setProyectosFilter', results)
    }
  },
  modules: {
  }
})
