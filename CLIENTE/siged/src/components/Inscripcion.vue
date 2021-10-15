<template>
    <div>
        <b-modal 
        id="modal-inscripcion" 
        size = "lg" 
        scrollable
        hide-header-close
        no-close-on-backdrop 
        ok-variant = warning
        ok-only
        ok-title = cerrar
        title = "Ficha de inscripción" >
        <FormInscripcion/>
        </b-modal>
    </div>
    
</template>
<script>
    import FormInscripcion from './FormInscripcion.vue'
export default {
    name: 'Inscripcion',
    components:{
        FormInscripcion
    }
}
</script>
<style>

</style>