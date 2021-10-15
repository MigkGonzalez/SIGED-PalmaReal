<template>
  <div class = 'container'>

    <span class="align-baseline"><h1 class="title fs-1 py-4 px-4 mt-1 mx-3 bg-warning text-wrap" lh-lg > {{titulovistaentrenador}}
          <b-button type="button" @click = "cerrarSesion()" class = "btn btn-danger mx-5 py-2 px-2 d-inline" id="cerrar">Cerrar sesión</b-button>
           </h1>
      </span>
        <span><h5 class="title fs-4 py-2 m-0 background-color " lh-lg > {{mensajeedicion}} </h5></span>
    
    
    <b-alert
    :show="dismissCountDown"
    dismissible
    :variant="mensaje.color"
    @dismissed="dismissCountDown=0"
    @dismiss-count-down="countDownChanged">
    {{mensaje.texto}}
    </b-alert>

    <form @submit.prevent = "editarinscripcion(inscripcionEditar)" v-if = "editar" autocomplete="off">
      <span class="align-baseline"><h3 class="title fs-3 py-4 px-4 mt-1 mx-3 bg-warning text-wrap" lh-lg > {{tituloactualizacion}}
    </h3></span>
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

    <form @submit.prevent = "agregarinscripcion()"  v-if = "!editar" autocomplete="off">
        <span class="align-baseline"><h3 class="title fs-3 py-4 px-4 mt-1 mx-3 bg-warning text-wrap" lh-lg > {{titulonuevoregistro}}
    </h3></span>
        <b-form-group id="nombre" label="Nombre:">
        <b-form-input
          id="nombre"
          v-model= "inscripcion.nombre"
          placeholder="Ingrese nombre"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group id="apellido" label="Apellido:">
        <b-form-input
          id="apellido"
          v-model= "inscripcion.apellido"
          placeholder="Ingrese apellido"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group id="genero" label="Genero:">
        <b-form-select
          id="genero"
          v-model="inscripcion.genero"
          :options="genero"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="tipoDocumento" label="Tipo de documento de identidad:">
        <b-form-select
          id="tipoDocumento"
          v-model = "inscripcion.tipo_documento"
          :options = "tipo_documento"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="numDocumento" label="Numero de documento:" >
        <b-form-input
          id="numDocumento"
          v-model = "inscripcion.num_documento"
          placeholder = "Ingrese número del documento"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="direcRes" label="Direccion de residencia:">
        <b-form-input
          id="direcRes"
          v-model = "inscripcion.dir_residencia"
          placeholder="Ingrese su direccion de residencia"
          required
        ></b-form-input>
      </b-form-group>
         
        <label> Fecha de Nacimiento: </label>
        <b-form-datepicker 
        id="fecha-nacimiento" 
        v-model="inscripcion.fecha_nacimiento" 
        placeholder = "YYYY-MM-DD" 
        dark
        menu-class="w-100"
        calendar-width="100%"
        class="mx-0 py-1">
        </b-form-datepicker>
                  
        <b-form-group id="eps" label="EPS:">
        <b-form-select
          id="eps"
          v-model = "inscripcion.eps"
          :options = "eps"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="rh" label="Tipo de sangre (RH):">
        <b-form-select
          id="rh"
          v-model = "inscripcion.rh"
          :options = "rh"
          required
        ></b-form-select>
      </b-form-group>

      <h3>Datos acudiente</h3>

      <b-form-group id="nomAcudiente" label="Nombre acudiente:">
        <b-form-input
          id = "nomAcudiente"
          v-model = "inscripcion.nombre_acudiente"
          placeholder = "Ingrese nombre del acudiente"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="telAcudiente" label="Telefono acudiente:">
        <b-form-input
          id="telAcudiente"
          v-model = "inscripcion.tel_acudiente"
          placeholder = "Ingrese el telefono del acudiente"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="emailAcudiente" label="Email acudiente:">
        <b-form-input
          id="emailAcudiente"
          v-model = "inscripcion.email_acudiente"
          type="email"
          placeholder="Ingrese email del acudiente"
          required
        ></b-form-input>
      </b-form-group>


        <b-button type="submit" variant="primary" >Enviar</b-button>
        <b-button type="reset" variant="danger" >Cancelar</b-button>

    </form>

    <span class="align-baseline"><h2 class="title fs-2 py-4 px-4 mt-1 mx-3 bg-warning text-wrap" lh-lg > {{tituloregistro}}
    </h2></span>
    <table class="table">
        <thead>
            <tr>
            <!-- th scope="col">#</!-->
            <th scope="col">Nombres</th>
            <th scope="col">Apellido</th>
            <th scope="col">Tipo DI</th>
            <th scope="col">Numero DI</th>
            <th scope="col">Direccion</th>
            <th scope="col">EPS</th>
            <th scope="col">Nombre acudiente</th>
            <th scope="col">Telefono acudiente</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in inscripciones" :key="index">
            <!-- th scope="row">{{item._id}}</!-->
            <td>{{item.nombre}}</td>
            <td>{{item.apellido}}</td>
            <td>{{item.tipo_documento}}</td>
            <td>{{item.num_documento}}</td>
            <td>{{item.dir_residencia}}</td>
            <td>{{item.eps}}</td>
            <td>{{item.nombre_acudiente}}</td>
            <td>{{item.tel_acudiente}}</td>

            <td>
                <b-button class = "btn-danger mx-9" @click="eliminarinscripcion(item._id)">Eliminar</b-button>
                <b-button class = "btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
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

            titulovistaentrenador: "Bienvenido entrenador",
            mensajeedicion:"“Hay que tener la humildad de aprender todos los días y yo lo hago. Soy un entrenador que mejora todos los días” - José Mourinho",
            tituloactualizacion:"Actualizar registros",
            titulonuevoregistro:"Ficha de inscripcion",
            tituloregistro:"-Registro Deportistas-",
            inscripciones: [],
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

            this.axios.get('/nota')
            .then(res => {

                this.inscripciones = res.data;

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
                this.mensaje.texto = "Registro Agregado"
                this.showAlert()


            })
            .catch(e => {

                console.log(e.response)

            })


        },

        eliminarinscripcion(id) {

            this.axios.delete(`/nota/${id}`)
            .then(res => {

                const index = this.inscripciones.findIndex(item => item._id === res.data._id)
                this.inscripciones.splice(index, 1)
                this.mensaje.color = "success"
                this.mensaje.texto = "Registro Eliminado"
                this.showAlert()



            })
            .catch(e => {

                console.log(e.response)

            })
        },

        activarEdicion(id){

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
                this.inscripciones[index].nombre = res.data.nombre
                this.inscripciones[index].apellido = res.data.apellido
                this.mensaje.color = "success"
                this.mensaje.texto = "Registro actualizado"
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