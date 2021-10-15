<template>
     <footer class="footer-section">
       <div class="container logo-footer-container">
           <p>&copy; 2021 SIGED UTP Misión TIC 2022</p>
            <img src="@/assets/images/logo_misiontic.png" alt="Logo Misión TIC 2022" id="logoFooter">
           
    </div>
   </footer>
</template>
<script>

export default {

  name: 'Entrenador',

    beforeCreate(){

        var autenticacion = window.localStorage.getItem('autenticacionEntrenador')
        console.log("autenticación está " + autenticacion)
        if(autenticacion !== 'ok') {
            this.$router.push({path: '/'})
        }

        var autenticacion = window.localStorage.getItem('autenticacionDeportista')
        console.log("autenticación está " + autenticacion)
        if(autenticacion !== 'ok') {
            this.$router.push({path: '/'})
        }

    },
    
    
    
}
</script>
<style>
.footer-section {
    background-color: #25294f;
    color: white;
    box-shadow: 3px 3px rgba(156, 155, 224, 0.384), -1em 0 0.4em olive;
    font-weight: 600;
}
.container{
    width: 85%;
    max-width: 850px;
    margin: 0px auto;
       
}
.logo-footer-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
#logoFooter{
    height: 150px;
    padding: 1rem;
}
#cerrar{
    margin: 0rem auto;
}
</style>