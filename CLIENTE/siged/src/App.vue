<template>
  <div id="app">
      <Header></Header> 
      
      
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Actualizar">Actualizar</router-link> |
      <router-link to="/Crud">CrudE</router-link> 
    </div> -->
    <router-view/>
    <Inscripcion></Inscripcion>
    <ModalLogin></ModalLogin>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Inscripcion from './components/Inscripcion.vue'
import ModalLogin from './components/ModalLogin.vue'
import FooterComp from './components/FooterComp.vue'
export default {
  name: 'App',
  
  data: () => ({

  }),
  components:{
    Header,
    Inscripcion,
    FooterComp,
    ModalLogin,
    }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
