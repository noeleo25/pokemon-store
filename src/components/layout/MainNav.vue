<template>
  <b-navbar toggleable="md" type="dark" class="main-nav">
    <b-container>
      <b-navbar-brand href="#" class="pt-0">
        <p class="pokemon-logo pokemon-font">
          PoKéMoN <span class="pokemon-solid-font"> Store </span>
        </p>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown text="Categorias" right>
            <b-dropdown-item to="#">Color</b-dropdown-item>
            <b-dropdown-item href="#">Generacion</b-dropdown-item>
            <b-dropdown-item href="#">Tipo</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Moneda" class="ml-md-2" right>
            <b-dropdown-item href="#">USD</b-dropdown-item>
            <b-dropdown-item href="#">MXN</b-dropdown-item>
          </b-nav-item-dropdown>
          
          <b-nav-item class="ml-md-2" to="/"> Home </b-nav-item>
          <b-nav-item class="ml-md-2" to="/about"> About </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.main-nav{
  background-color: var(--dark-purple);
}
#nav a.router-link-exact-active {
  color: var(--yellow);
}
</style>