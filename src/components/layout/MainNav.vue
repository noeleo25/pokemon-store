<template>
  <b-navbar toggleable="md" type="dark" class="main-nav">
    <b-container>
       <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="#" class="pt-0">
        <p class="pokemon-logo pokemon-font">
          PoKéMoN <span class="pokemon-solid-font"> Store </span>
        </p>
      </b-navbar-brand>

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

          <div class="ml-md-3 d-none d-md-flex">
            <CartPopover/>
          </div>
          <li class="ml-md-3 d-block d-md-none nav-item">
            <router-link to="cart" class="nav-link">
                Mi carrito
                <b-badge 
                  v-if="totalCartItems > 0"
                  class="cart-badge position-relative">
                  {{totalCartItems}}
                </b-badge>
              </router-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
  import CartPopover from '@/components/CartPopover.vue'
  export default {
    components: { CartPopover },
    computed: {
      totalCartItems(){
        return this.$store.getters['shoppingCart/totalCartItems'];
      },
    },
  }
</script>

<style scoped>
.main-nav{
  background-color: var(--dark-purple);
}
#nav a.router-link-exact-active {
  color: var(--yellow);
}
.cart-badge{
  left: 0;
}
.nav-item{
  text-align: left;
}

</style>
<style>
.navbar-nav .dropdown-menu{
  background-color: rgba(45, 51, 136, 0.8) !important;
  color: #fff;
}
.navbar-nav .dropdown-menu .dropdown-item{
  color: inherit;
}
.navbar-nav .dropdown-menu .dropdown-item:hover{
  color: var(--dark-purple);
}
</style>