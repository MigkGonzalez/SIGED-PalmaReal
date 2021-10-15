<template>
        <div class="card text-warning bg-dark rounded-3 mx-5 mt-3 px-3" id="containerCard">
            <div class="d-flex justify-content-center p-2">
                <img src="@/assets/images/Horarios.png" class="img-fluid mt-2 rounded-3" alt="Horarios" >
            </div>
            <div class="card-body">
                <h3 class="card-title">{{titleHorario}}</h3>
                <p class="card-text text-md-start">{{infoHorario}}</p>
            </div>
            <div class="card-footer"></div>
            <pre>
            </pre>
        </div>
    
</template>

<script>
    export default {
        name: "CardHorario",
        

        data() {
    return {
      titleHorario: "HORARIO",
      infoHorario: "Lorem ipsum snfe idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv dlasvnlk kdertw jorgwqf vnwenv jdfjpvnsdi, Lorem ipsum snfe idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv dlasvnlk",
    };
  },
  }
</script>

<style scoped>
#containerCard{
background:#f5d654
}
</style>