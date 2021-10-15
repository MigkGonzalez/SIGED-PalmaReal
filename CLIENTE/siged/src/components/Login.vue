<template>
  <div class="container">
    <b-form @submit.prevent="buscarUsuario()" v-if="show" autocomplete="off">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="username"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="btn my-3 px-4">Acceder</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true,
      nota: [],
    };
  },
  methods: {
    buscarUsuario() {
      console.log("ejecuta la función buscar");
      this.axios.get("nota").then((res) => {
        // console.log(this.nota);
        this.nota = res.data;

        this.nota.forEach((value, index) => {
        //   console.log(value.username);
        //   console.log(value.password);
        //   console.log(value.role);

          if (this.form.username === value.username) {
            console.log("usuario si existe");
            if (this.form.password === value.password) {
              console.log("contraseña correcta");

              if (value.role === "deportista") {
                window.localStorage.setItem("autenticacionDeportista", "ok");

                window.localStorage.setItem("idDeportista", value._id);
                window.localStorage.setItem("usernameDeportista", value.username);
                
                             
                this.$router.push({ path: "/Actualizar" });
              }

              if (value.role === "entrenador") {
                window.localStorage.setItem("autenticacionEntrenador", "ok");

                this.$router.push({ path: "/Entrenador" });
              }
            }
          }
        });
      });
    },
  },
  beforeCreate() {
    var autenticacion = window.localStorage.getItem("autenticacionDeportista");
    console.log("autenticación deportista está " + autenticacion);
    if (autenticacion === "ok") {
      this.$router.push({ path: "/Actualizar" });
    }
    var autenticacion = window.localStorage.getItem("autenticacionEntrenador");
    console.log("autenticación entrenador está " + autenticacion);
    if (autenticacion === "ok") {
      this.$router.push({ path: "/Entrenador" });
    }
  },
  components: {},
};
</script>
<style scoped>
* {
  margin: 1rem 5.5rem;
  border-radius: 12px;
  
}
.container{
    margin: 0 auto;
    padding: 1rem;
    margin-top: 0.5rem;
    width: 100%;
    background: #f5d654;
}
input{
    margin: 1.5rem auto;
    padding: 1rem;
    width:100%;
    background: #f0efea;
    align-content: center;
    border-radius: 12px;
  }

</style>