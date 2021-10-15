<template>
        
        <div class="card text-dark background-color rounded-3 mx-5 mt-3 px-3" id="containerCard">
            <div class="d-flex justify-content-center p-2">
                <img :src="coach.imagen" class="img-fluid mt-4 rounded-3" alt="Foto entrenador " >
            </div>
            <div class="card-body">
                <h3 class="card-title">{{ coach.nombre }}</h3>
                <p class="card-text text-md-start">{{ coach.descripcion }}</p>
                <p class="card-text text-md-start"><span>Formación: </span> {{ coach.formación }}</p>
            </div>
            <div class="card-footer"></div>
            <pre>
            </pre>
        </div>
    
</template>

<script>
    export default {
        name: "CardEntrenadoress",
        props: ['coach']
    }
</script>

<style scoped>
#containerCard{
background:#f5d654
}
</style>