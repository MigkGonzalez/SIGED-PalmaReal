<template>
  <div class:container>
        <Crud><b-button @click="cerrarSesion()" variant="danger">Cerrar sesión</b-button></Crud>
  </div>
</template>
<script>
import Crud from "./components/Crud.vue";
export default {
  name: "CrudEntrenador",
  components: {
    Crud,
  },
};
</script>
<style>
.container{
    margin-top: 5rem;
}

.salir{
    display: flex;
    margin-top: 5rem;

}
</style>