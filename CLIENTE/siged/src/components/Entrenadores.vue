<template>
<div id="linkEntrenadores">
  <div id="tituloEntrenadores">
    <span><h1 class="title fs-1 py-4 bg-warning text-wrap" lh-lg > {{tituloentrenadores}} </h1></span>
    <span><h5 class="title fs-4 py-2 m-0 background-color " lh-lg > {{mensajeentrenadores}} </h5></span>
    <span><p class="title fs-5 py-5 px-5 mx-5 text-md-center background-color"> {{infoentrenadores}} </p></span>
    <div class="container-entrenadores d-flex" id="entrenadores">
      <div class="row justify-content-center mb-5">
        <div class="col-6 mt-5" v-for="(item, index) of coach" :key="index">
          <CardEntrenadores :coach="item"></CardEntrenadores>
        </div>
      </div>
       <!-- Limpiar floats -->
    <div class="clearfix"></div>
    </div>
    </div>
    </div>
   </template>
<script>
  
import CardEntrenadores from './CardEntrenadores.vue'

export default {
  name: "Entrenadores",
  components: {
    CardEntrenadores,
  },

  data(){
    return {
      tituloentrenadores: "Nuestros entrenadores",
      mensajeentrenadores: "PASION, ENTREGA Y DISCIPLINA EN NUESTRA LABOR",
      infoentrenadores: " Son profesionales en Educación Física y Deportes, especializados en la formación deportiva de voleibol con certificación de la FIVB (Federación internacional de voleibol) nivel 1 y 2, Calificados para acompañarlos en su proceso formativo y competitivo con estándares de calidad y el respaldo institucional del Imder Palmira y la liga vallecaucana de voleibol",

      coach: [
        {
          nombre: "Entrenador 1",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis, laudantium tempore, provcodigoent corporis iure ex libero repellendus accusamus accusantium at voluptate excepturi voluptatem quis, illo modi exercitationem error consequatur.",
          formación: "Profesional en deporte Universidad del Valle",
          imagen: "https://placeimg.com/640/480/people",
        },
        {
          nombre: "Entrenador 2",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis, laudantium tempore, provcodigoent corporis iure ex libero repellendus accusamus accusantium at voluptate excepturi voluptatem quis, illo modi exercitationem error consequatur.",
          formación: "Coache FIVB Nivel 2",
          imagen: "https://placeimg.com/640/480/people",
       },
      ]
    }
  }
};
</script>
<style>
.clearfix {
  clear: both;
  float: none;
}
h1 {
  font-size: 2.5rem;
  line-height: 1.3em;
}
h2 {
  font-size: 2rem;
  line-height: 1.2em;
  margin: 2rem 0;
  margin-top: 4rem;
  font-weight: 600;
}
h3 {
  font-size: 1.5rem;
  line-height: 1em;
}
p {
  margin-bottom: 1.6em;
}
.container-entrenadores {
  height: 100%;
  width: 100%;
  background: #f4fa9d;
  text-align: center;
  align-items: center;
  display: flex;
}
#entrenadores {
  display: flex;
  margin-top: 3rem;
  background: #f4fa9d;
  margin: 0;
  padding-top: 5rem;
  padding: 2rem;
}
#tituloEntrenadores{
  padding-top: 5rem;
  background: #f4fa9d;
  
}
#linkEntrenadores{
  padding-top: 5rem;
  background: #f4fa9d;
}
</style>