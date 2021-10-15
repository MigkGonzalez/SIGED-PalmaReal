<template>
  <div class = 'container'>

      <span class="align-baseline"><h1 class="title fs-1 py-4 px-4 mt-1 mx-3 bg-warning text-wrap" lh-lg > {{titulovistadeportista}}
          <b-button type="button" @click = "cerrarSesion()" class = "btn btn-danger mx-5 py-2 px-2 d-inline" id="cerrar">Cerrar sesión</b-button>
           </h1>
      </span>
        <span><h5 class="title fs-4 py-2 m-0 background-color " lh-lg > {{mensajeactualizacion}} </h5></span>
    <b-alert
    :show="dismissCountDown"
    dismissible
    :variant="mensaje.color"
    @dismissed="dismissCountDown=0"
    @dismiss-count-down="countDownChanged">
    {{mensaje.texto}}
    </b-alert>


    <form @submit.prevent = "editarinscripcion(inscripcionEditar)" v-if = "editar" autocomplete="off">
        <h3>Actualizar Datos</h3>
        <label for="">Tipo de documento</label>
        <input type = "text" class = "form-control my-2" placeholder = "Tipo de documento" v-model = "inscripcionEditar.tipo_documento">
        <label for="">Numero de documento</label>
        <input type = "text" class = "form-control my-2" placeholder = "Numero de documento" v-model = "inscripcionEditar.num_documento">
        <label for="">Direccion</label>
        <input type = "text" class = "form-control my-2" placeholder = "Direccion" v-model = "inscripcionEditar.dir_residencia">
        <label for="">Nombre acudiente</label>
        <input type = "text" class = "form-control my-2" placeholder = "nombre acudiente" v-model = "inscripcionEditar.nombre_acudiente">
        <label for="">Telefono acudiente</label>
        <input type = "text" class = "form-control my-2" placeholder = "Telefono acudiente" v-model = "inscripcionEditar.tel_acudiente">
        
        <b-button class = "btn-success my-2" type = "submit">Actualizar</b-button>
        <b-button class = "my-1" type = "submit" @click = "editar = false">Cancelar</b-button>
    </form>
        <span><h2>-Ficha de actualizacion de Datos-</h2></span>
    <table class="table">
        <thead>
            <tr>
            <!-- th scope="col">#</!-->
            <th scope="col">Nombres</th>
            <th scope="col">Apellido</th>
            <th scope="col">Tipo DI</th>
            <th scope="col">Numero DI</th>
            <th scope="col">Direccion</th>
            <th scope="col">Nombre acudiente</th>
            <th scope="col">Telefono acudiente</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        
        <tbody>
            <tr>
            <td>{{calldeportista.nombre}}</td>
            <td>{{calldeportista.apellido}}</td>
            <td>{{calldeportista.tipo_documento}}</td>
            <td>{{calldeportista.num_documento}}</td>
            <td>{{calldeportista.dir_residencia}}</td>
            <td>{{calldeportista.nombre_acudiente}}</td>
            <td>{{calldeportista.tel_acudiente}}</td>
            
            <td>
                <b-button class = "btn btn-outline-primary  mx-0" @click="activarEdicion(calldeportista._id)">Actualizar</b-button>
            </td>
            </tr>

        </tbody>
        
    </table>

  </div>

</template>

<script>
export default { 
    
    data(){
        return {
            titulovistadeportista: "Bienvenido al club Palma Real",
            mensajeactualizacion:"“Si trabajas, los resultados vendrán solos. No hago las cosas a medias, porque sé que si lo hago entonces sólo puedo esperar tener resultados a medias” - Michael Jordan",
            inscripciones: [],
            calldeportista: [],
            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,

            inscripcion: {
            nombre: "", 
            apellido: "",
            genero: null,
            fecha_nacimiento:null,
            tipo_documento:null,
            num_documento: '',
            dir_residencia:'',
            eps:null,
            rh:null,
            nombre_acudiente:'',
            tel_acudiente:'',
            email_acudiente:'',
            },
            genero: [{ text: 'Seleccione', value: null }, 'Hombre', 'Mujer'],
            tipo_documento: [{ text: 'Seleccione', value: null }, 'Registro Civil', 'Tarjeta de Identidad', 'Cédula'],
            eps: [{ text: 'Seleccione', value: null }, 'Comfenalco Valle', 'Coomeva', 'Nueva EPS',
              'Salud Total', 'CafeSalud', 'Sanitas', 'Emssanar', 'S.O.S', 'Cruz Blanca'],
            rh: [{ text: 'Seleccione', value: null }, 'A positivo (A +)', 'A negativo (A-)', 'B positivo (B +)',
              'B negativo (B-)', 'AB positivo (AB+)', 'AB negativo (AB-)', 'O positivo (O+)', 'O negativo (O-)'],

            show: true,

            editar: false,
            inscripcionEditar: {}

                        
        }

        

    },

    

    created() {
      
        this.listarinscripciones()
        

    },

    methods: {

        listarinscripciones(){
          
          var id=window.localStorage.getItem("idDeportista")
          console.log("var id:" +id);

            this.axios.get('/nota')
            .then(res => {

                this.inscripciones = res.data;
                //console.log(this.inscripciones)

                this.inscripciones.forEach((value, index) => {

                if (value._id === id) {
                    console.log(value._id);
                    this.calldeportista.nombre=value.nombre
                    this.calldeportista.apellido=value.apellido
                    this.calldeportista.tipo_documento=value.tipo_documento
                    this.calldeportista.num_documento=value.num_documento
                    this.calldeportista.dir_residencia=value.dir_residencia
                    this.calldeportista.nombre_acudiente=value.nombre_acudiente
                    this.calldeportista.tel_acudiente=value.tel_acudiente
                    
                } 
                
                })

            })

            .catch(e => {

                console.log(e.response)

            })
           

        },

        agregarinscripcion(){


            this.axios.post('/nueva-nota', this.inscripcion)
            .then(res =>{

                this.inscripciones.push(res.data)
                this.inscripcion.nombre = ""
                this.inscripcion.apellido = ""
                this.inscripcion.genero = ""
                this.inscripcion.fecha_nacimiento = ""
                this.inscripcion.tipo_documento = ""
                this.inscripcion.num_documento = ""
                this.inscripcion.dir_residencia = ""
                this.inscripcion.eps = ""
                this.inscripcion.rh = ""
                this.inscripcion.nombre_acudiente = ""
                this.inscripcion.tel_acudiente = ""
                this.inscripcion.email_acudiente = ""
                this.mensaje.color = "success"
                this.mensaje.texto = "inscripcion Agregada"
                this.showAlert()


            })
            .catch(e => {

                console.log(e.response)

            })


        },

        

        activarEdicion(id){

            id=window.localStorage.getItem("idDeportista")

            this.editar = true
            this.axios.get(`/nota/${id}`)
            .then(res => {

                this.inscripcionEditar = res.data

            })
            .catch(e => {


                console.log(e.response)

            })


        },

        editarinscripcion(item) {

            this.axios.put(`/nota/${item._id}`, item)
            .then(res => {
                const index = this.inscripciones.findIndex(n => n._id === res.data._id)
                this.inscripciones[index].dir_residencia = res.data.dir_residencia
                this.inscripciones[index].apellido = res.data.apellido
                this.mensaje.color = "success"
                this.mensaje.texto = "datos actualizados"
                this.showAlert()
                this.editar = false

            })
            .catch(e => {



            })


        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },

        cerrarSesion(){

            window.localStorage.removeItem('autenticacionEntrenador')
            this.$router.push({path: '/'})

            window.localStorage.removeItem("idDeportista")
            
            window.localStorage.removeItem("usernameDeportista")

            window.localStorage.removeItem('autenticacionDeportista')
            this.$router.push({path: '/'})
          
        }


    }

}
</script>
<style scoped>
* {
  margin: 0.5rem 1rem;
  
}
.container{
    margin-top:5rem;
    margin: 0 auto;
    padding: 3rem;
    padding-top: 12rem;
    width: 65%;
    background: #f5d654;
}
input{
    margin: 1rem auto;
    padding: 0.5rem;
    width:70%;
    background: #f0efea;
    align-content: space-between;
  }

</style>