<template>
<div>
  <Main></Main>
  <Ubicacion></Ubicacion>
  <Entrenadores></Entrenadores>
</div>

</template>

<script>
import Main from  './Main.vue'
import Ubicacion from './Ubicacion.vue'
import Entrenadores from './Entrenadores.vue'
export default {
    name: 'HomeComp',

components:{
    Main,
    Ubicacion,
    Entrenadores,
  }
}
</script>

<style>

</style>