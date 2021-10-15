<template>
    <div>
        <b-modal 
        id="modal-Login" 
        size = "lg" 
        scrollable
        hide-header-close
        no-close-on-backdrop 
        ok-variant = warning
        ok-only
        ok-title = cerrar
        title = "Registro" >
        <Login/>
        </b-modal>
    </div>
    
</template>
<script>
    import Login from './Login.vue'
export default {
    name: 'ModalLogin',
    components:{
        Login
    }
}
</script>
<style>

</style>