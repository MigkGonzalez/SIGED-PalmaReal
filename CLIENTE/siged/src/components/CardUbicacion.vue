<template>
        <div class="card text-warning bg-dark rounded-3 mx-5 mt-3 px-3" id="containerCard">
            <div class="d-flex justify-content-center p-2">
                <span class="container-map rounded-3 mt-2" ><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2582.1771610200904!2d-76.30815714140502!3d3.526970949115824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1633128507361!5m2!1ses-419!2sco" 
                    width="750" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe></span>
            </div>
            <div class="card-body">
                <h3 class="card-title">{{titleUbicacion}}</h3>
                <p class="card-text text-md-start">{{infoUbicacion}}</p>
            </div>
            <div class="card-footer"></div>
            <pre>
            </pre>
        </div>
    
</template>

<script>
    export default {
        name: "CardUbicacion",

        data() {
    return {
      titleUbicacion: "UBICACIÓN",
        infoUbicacion: "Lorem ipsum snfe idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv dlasvnlk kdertw jorgwqf vnwenv jdfjpvnsdi, Lorem ipsum snfe idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv dlasvnlk",
    };
  },
        }
</script>

<style scoped>
#containerCard{
background:#f5d654
}
</style>