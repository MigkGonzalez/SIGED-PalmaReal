<template class="formulario">
  <div class = 'container'>
    
    <b-alert
    :show="dismissCountDown"
    dismissible
    :variant="mensaje.color"
    @dismissed="dismissCountDown=0"
    @dismiss-count-down="countDownChanged">
    {{mensaje.texto}}
    </b-alert>

    <form @submit.prevent = "agregarinscripcion()"  v-if = "!editar" autocomplete="off">
        <!-- <h3>Ficha de inscripcion</h3><hr><br> -->
        <b-form-group id="username" label="Username:">
        <b-form-input
          id="username"
          v-model= "inscripcion.username"
          placeholder="Ingrese nombre de usuario, sin espacios"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group id="password" label="Password:">
        <b-form-input
          id="password"
          type="password"
          v-model= "inscripcion.password"
          placeholder="Ingrese contraseña"
          required
        ></b-form-input>
        </b-form-group>


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


  </div>

</template>

<script>
export default {
    
    data(){
        return {

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
            rh: [{ text: 'Seleccione', value: null }, 'A +', 'A-', 'B +','B-', 'AB+', 'AB-', 'O+', 'O-'],

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
                this.mensaje.texto = "inscripcion Agregada"
                this.showAlert()


            })
            .catch(e => {

                console.log(e.response)

            })


        },

        
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }


    }

}
</script>
<style scoped>
* {
  margin: 0.5rem 4rem;
  border-radius: 12px;
  
}
.container{
    margin-top: 0.5rem;
    margin: 0 auto;
    width: 100%;
    background: #f5d654;
}
input{
    margin: 0.5rem auto;
    padding: 0.5rem;
    width:100%;
    background: #f0efea;
    align-content: center;
    border-radius: 12px;
  }
select{
  margin: 0.5rem auto;
    padding: 0.5rem;
    width:100%;
    background: #f0efea;
    align-content: center;
    border-radius: 12px;
    border-color: #f5d654;
  }
  b-form .datepicker{
    margin: 0.5rem auto;
    padding: 0.5rem;
    width:100%;
    background: #f0efea;
    align-content: center;
    border-radius: 12px;
    border-color: #f5d654;
  }
  

</style>