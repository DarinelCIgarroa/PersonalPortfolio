import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
const About = () => import(/* webpackChunkName: "About" */ '@/views/About.vue')
const Resume = () => import(/* webpackChunkName: "Resume" */ '@/views/Resume.vue')
const Portfolio = () => import(/* webpackChunkName: "Portfolio" */ '@/views/Portfolio.vue')
const Contact = () => import(/* webpackChunkName: "Contact" */ '@/views/Contact.vue')
const NotFound = () => import(/* webpackChunkName: "Contact" */ '@/views/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Sobre-Mi',
    name: 'About',
    component: About
  },
  {
    path: '/Curriculum',
    name: 'Cv',
    component: Resume
  },
  {
    path: '/Portafolio',
    name: 'Portafolio',
    component: Portfolio
  },
  {
    path: '/Contacto',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
    
  }
]

const router = createRouter({
  
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
