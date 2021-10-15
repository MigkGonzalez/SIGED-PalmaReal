<template>
    <main class="main">
        
    <div class="container-main">
        
        <div class="row">
            
          <div class="col-5 py-3 mg-0" id="info-club">
              <span class="align-baseline"><h1 class="title fs-1 py-4 mt-0 bg-warning text-wrap" lh-lg > {{tituloprincipal}} </h1></span>
            <p class="lh-lg  text-md-start my-4"> 
              {{descripcion1}}
            </p>
            <p class="lh-lg text-md-start my-2">
              {{descripcion2}}
            </p>
            <span><h4 class="title fs-3 py-4 mt-0 background-color text-wrap" lh-lg>{{invitacion}}</h4></span>
            <b-button v-b-modal.modal-inscripcion type=button class="btn btn-outline-primary btn-lg my-4 px-5">Inscribete ahora</b-button>
                                   
          </div>
          <div class="col-7 d-flex" id="Container-image">
            <img src="@/assets/images/equipo_01.jpeg" class="img-fluid mt-2 pd-2" alt="Equipo Palma Real" id="image-equipo">
        </div>
        <div class="container-main" id="logos-respaldos">  
            <div class="row"></div>
          <div class="col-3"><img src="@/assets/images/logo-imderPal.jpg" class="img-fluid" alt="Logo imder Palmira"></div>
          <div class="col-3"><img src="@/assets/images/logo-indervalle.jpg" class="img-fluid" alt="Logo inderValle"></div>
          <div class="col-3"><img src="@/assets/images/logo-liga.jpg" class="img-fluid" alt="Logo Liga Valle"></div>
          <div class="col-3"><img src="@/assets/images/logo-fivb.png" class="img-fluid" alt="Logo FIVB"></div>
        </div>
        </div>
        </div>
   <!-- Limpiar floats -->
    <div class="clearfix"></div>
  </main>
  
</template>

<script>
export default {
    data(){
    return {
      tituloprincipal: "Club deportivo Palma Real",
      descripcion1:"Somos un club deportivo enfocado a la formación de niños y jovenes en la disciplina del Voleibol, con mas de 6 años de experiencia formando deportistas integrales que se destacan por su disciplina compromiso y capacidad, de la mano de los mejores entrenadores con certificación FIVB nivel I.",
      descripcion2:"Nos encontramos ubicados en la ciudad de Palmira (v), en las instalaciones de la Ciudadela deportiva municipal “Ramiro Echeverry”, junto a los coliseos de pesas y lucha libre, bajo el reconocimiento del IMDER Palmira, Inder Valle y la liga Vallecaucana de Voleibol.",
      invitacion: "Date la oportunidad de entrenar con nosotros!"
    }
    }
}
</script>
<style>
*{
    text-align: center;
    margin: 0px;
    padding: 0px;
    align-items: center;
    /*FUENTES*/
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.2rem;
    line-height: 1.5em;
    -webkit-font-smoothing: antialiased;
}
.clearfix{
    clear: both;
    float: none;
}
h1{
    font-size: 2.5rem;
    line-height: 1.3em;
}
h2{
    font-size: 2rem;
    line-height: 1.2em;
    margin: 2rem 0;
    font-weight: 600
}
h3{
    font-size: 1.5rem;
    line-height: 1em;
}
p{
    margin-bottom: 1.6em;
}
/*inicio seccion principal */
.main{
    width: 100%;
    padding-top: 10rem;
    
}
.container-main{
    display: flex;
    min-height: 600px;
    margin: 0 auto;
    background:#f5d654 ;
    justify-content: center;
    align-items: center;
}
#info-club{
    padding-left: 3rem;
    margin: 1rem 0;

}
#Container-image{
    margin: 3rem 0em;
    padding: 2rem;
}

#image-equipo{
      
    border-radius: 12px;
    
}
#logos-respaldos{
    padding: 0.5em 5rem;
    margin: 0;
    min-height: 200px;
    background: white;
    align-items: center;
}
#registroMain{
	color:#e4ce08;
  background: #4a2deee8;
    display: block;
    width:200px;
    padding: 0.5rem 0.5rem;
    border-radius: 8px;
    transition: 300ms all;
    cursor: pointer;
    font-weight: 500;
    line-height: 1.3em;
    margin: 0 auto;
    margin-top:3rem;
}
#registroMain:hover{
    color: #413a31;
    background: #15cc0fd5;
}
</style>