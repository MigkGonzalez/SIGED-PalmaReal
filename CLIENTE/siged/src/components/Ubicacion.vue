<template>
  <div id="linkUbicacion">
    <div id="id=tituloUbicacion">
      <span><h2 class="title fs-2 py-4 bg-warning text-wrap" lh-lg> {{ tituloubicacion }} </h2></span>
      <div class="container-entrenadores d-flex" id="ubicacion">
        <div class="row justify-content-center mb-5">
          <div class="col-6 mt-5">
            <CardHorario></CardHorario>
          </div>
          <div class="col-6 mt-5">
            <CardUbicacion></CardUbicacion>
          </div>
          </div>
        <!-- Limpiar floats -->
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CardHorario from "./CardHorario.vue";
import CardUbicacion from "./CardUbicacion.vue";

export default {
  name: "Ubicacion",
  components: {
    CardUbicacion,
    CardHorario,
  },

  data() {
    return {
      tituloubicacion: "HORARIOS Y UBICACIÓN",
    };
  },
};
</script>

<style>
.clearfix {
  clear: both;
  float: none;
}

.container-horarios {
  height: 100%;
  width: 100%;
  padding-top: 6rem;
  background: #f4fa9d;
  text-align: center;
  align-items: center;
  display: flex;
}

#horarios-ubicacion {
  margin-top: 2rem;
  margin: 0;
  padding: 2rem;
}
#ubicacion {
  display: flex;
  margin-top: 3rem;
  background: #f4fa9d;
  margin: 0;
  padding-top: 5rem;
  padding: 2rem;
}
#tituloUbicacion{
  padding-top: 5rem;
  background: #f4fa9d;
  
}
#linkUbicacion{
  padding-top: 10rem;
  background: #f4fa9d;
}
</style>