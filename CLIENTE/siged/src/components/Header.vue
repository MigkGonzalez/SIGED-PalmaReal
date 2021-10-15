<template>
  <header class="header">
    <div class="container logo-menu-container">
      <!--Logo-->
      <a href="#" class="logo"
        ><img src="@/assets/images/logo.png" alt="logotipo"
      /></a>
      <!--Menu NAV-->
      <span class="menu-icon">Ver menú</span>
      <nav class="menu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          |
          <li><a href="#linkUbicacion">Horarios</a></li>
          |
          <li><a href="#linkEntrenadores">Entrenadores</a></li>
          |
          <li><a v-b-modal.modal-inscripcion>Inscripción</a></li>
          |
          <li><a v-b-modal.modal-Login>Login</a></li>
        </ul>
      </nav>
    </div>
    <!-- Limpiar floats -->
    <div class="clearfix"></div>
  </header>
</template>

<script>
export default {
  name: "Header",

  components: {},
};
</script>

<style>
* {
  text-align: center;
  margin: 0px;
  padding: 0px;
  align-items: center;
  /*FUENTES*/
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5em;
  -webkit-font-smoothing: antialiased;
}
.header {
  background: rgb(121, 152, 182);
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  opacity: 1;
  border-top: 5px solid #122350;
  box-shadow: 3px 3px rgba(156, 155, 224, 0.384), -1em 0 0.4em olive;
  position: fixed;
  z-index:1035;
  
}
.container {
  width: 85%;
  max-width: 850px;
  margin: 0px auto;
}
.logo-menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.clearfix {
  clear: both;
  float: none;
}

.logo img {
  height: 145px;
  display: block;
  animation: crecer 3s linear;
}
@keyframes crecer {
  from {
    -webkit-transform: scale(0.25);
    transform: scale(0.25);
  }
}
.menu {
  font-weight: 600;
}
.menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu ul li {
  display: inline-block;
}
.menu ul li a {
  text-decoration: none;
  display: block;
  padding: 0.5rem 0.5rem;
  color: #444;
  transition: 300ms all;
  border-radius: 8px;
}
.menu a:hover {
  color: #f0a039;
  background: #f5f7ad;
}
.menu-icon {
  display: none;
}
#registro {
  color: #fd6b09;
  display: block;
  padding: 0.5rem 0.5rem;
  border-radius: 8px;
  transition: 300ms all;
  cursor: pointer;
}
#registro:hover {
  color: #f0a039;
  background: #f5f7ad;
}
/*inicio media query  */
/* @media only screen and (max-width: 780px){
.menu{
    width: 100%;
    margin-top: 1.5rem;
}
.menu ul{
    display: none;
}
.menu ul.show{
    display: block;
}
.menu ul li{
    display: block; 
    text-align: left;    
}
.menu ul li a{
    display: block;
    padding: 0.5rem 0;
    border-radius: 4px;
    color: #444;
    transition: 300ms all;
    
}
.menu a:hover{
    color: #f0a039;
}
.menu-icon{
    display: block;
    cursor: pointer;
    padding: 0.5rem 0.2rem;
    font-weight: 600;
} */
#btn-modal {
  display: none;
}
.lbl-modal {
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  padding: 0.5rem 0;
  border-radius: 4px;
  color: #444;
  transition: 300ms all;
}
.lbl-modal :hover {
  color: #f0a039;
}
</style>