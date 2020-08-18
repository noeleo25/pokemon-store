<template>
  <CustomPopover 
    :mainClass="'d-flex align-items-center'" 
    :buttonClass="'cart-btn px-0'">
    <template v-slot:button-content>
      <IconBase
        :iconName="'cart'"
        :width="24"
        :height="24"
        >
        <ShoppingCartIcon/>
      </IconBase>
      <b-badge class="cart-badge" v-if="totalCartItems > 0">
        {{ totalCartItems }}
      </b-badge>
    </template>
    <template v-slot:dropdown-content>
      <div class="dropdown-cart-content">
        <div
          v-for="item in cartItems" 
          :key="item.id"
          class="">     
          <div
            class="dropdown-cart-item d-flex align-items-center">
            <img class="cart-content-img" :src="item.img" />
            <div class="cart-content-text ml-2 w-100">
              <div
                class="title mb-0 d-block">
                {{ item.name }} 
              </div>
              <div class="d-flex justify-content-between">
                <p class="subtitle mb-1"> 
                  Habilidad: {{ item.ability.name }}
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-end">
                <div class="">
                  <p class="mb-0 prices"> 
                    <span class="total-price"> 
                      ${{ item.prices.mxn }} 
                      {{ getCurrency.content }}
                    </span>
                  </p>
                </div>
                <button 
                  class="link trash-btn onhover"
                  @click="itemToTrash(item.id)">
                  <IconBase
                    class="trash-icon"
                    icon-name="trash"
                    
                    width="22"
                    height="22">
                    <TrashIcon />
                  </IconBase>
                </button>
              </div>
            </div>
          </div>
          
          <hr role="separator" aria-orientation="horizontal" class="dropdown-divider">
        </div>
        <div class="cart-options">
          <template v-if="totalCartItems > 0">
            <p class="text-right"> 
              <span class="subtotal-price"> 
                ${{ total.subtotal }}
                {{ getCurrency.content }}
              </span>
              <span class="total-price"> 
                ${{ total.total }}
                {{ getCurrency.content }}
              </span>
            </p>
            <div class="d-flex justify-content-between align-items-end">
              <button
                class="delete-cart link error-message" 
                @click="deleteAll()">
                Vaciar carrito
              </button>
              <router-link
                class="main-btn"
                :to="{ name:'cart' }">
                Proceder al pago
              </router-link>
            </div>
          </template>
          <template v-else>
            <b-alert 
              class="mb-0"
              variant="warning"
              show>
              <p class="text-center mb-0"> 
                Captura Pokemones en tu carrito :) 
              </p>
            </b-alert>
          </template>
        </div>
      </div>
    </template>
  </CustomPopover>
</template>

<script>
  import CustomPopover from '@/components/CustomPopover.vue';
  import TrashIcon from '@/components/icon/TrashIcon.vue';
  import ShoppingCartIcon from '@/components/icon/ShoppingCartIcon.vue'
  import { mapState } from 'vuex'
  export default {
    name: "CartPopover",
    components: {
      ShoppingCartIcon,
      CustomPopover,
      TrashIcon
    },
    data() {
      return {
        //total: 0.00,
      }
    },
    
    computed: {
      //cartItems(){
       
        //return this.$store.state.cartItems;
        
        //return this.$store.state.shoppingCart.cartItems;  
      //},
      /* TEMA: state */
      ...mapState({
        /*cartItems: state => state.cartItems,
        status: state => state.cartStatus*/
        /*cartItems : 'cartItems',
        status: 'status'*/

        //accediendo a modulos
        cartItems: state => state.shoppingCart.cartItems
      }),
      totalCartItems(){
        return this.cartItems.length;
        //return this.$store.getters['shoppingCart/totalCartItems'];
      },
      getCurrency(){
        return { 
          id: 'MXN',
          selected: true,
          content: 'MXN',
        };
        //return this.$store.getters.currencySelected;
      },
      total(){
        //return 0.00;
        //return this.$store.getters['totals'];
        //accediendo a modulos
        return this.$store.getters['shoppingCart/totals'];
      }
    },
    methods: { //no agregar metodos hasta que se tenga el store
      itemToTrash(id){
        //this.$store.dispatch('deleteItem', id);
        this.$store.dispatch('shoppingCart/deleteItem', id);
      },
      deleteAll(){
         this.$store.dispatch('shoppingCart/deleteAllItems');
      },
    },
  }
</script>

<style>
.trash-btn.onhover{
  opacity: 0;
}
.dropdown-cart-content{
  width: 350px;
  padding: 0px;
}
.dropdown-cart-item{
  padding: 10px 12px;
  color: #fff;
  max-height: 120px;
}
.dropdown-cart-item .title {
  color: inherit;
  text-align: left;
  display: block!important;
  display: -webkit-box!important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 48px;
  max-width: 100%;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: normal;
  font-size: 1.2rem;
}
.dropdown-cart-item:hover .title{
  text-decoration: none;
  color: inherit;
}
.dropdown-cart-item:hover .trash-btn{
  opacity: 1;
 
}
.cart-content-img{
  max-width: 100px;
}
.cart-content-text .title{
  font-weight: bold;
}
.dropdown-divider{
  border-top: 2px solid var(--form-gray) !important;
  margin: 0 !important;
}
.cart-options{
  padding: 16px 12px 4px 12px;
  color: #fff;
}
.delete-cart.link,
.trash-btn.link{
  color: inherit;
  font-weight: bold;
  border: none;
  background: transparent;
  font-size: 14px;
  font-weight: normal;
  color: var(--orange);
}

.delete-cart.link:hover{
  font-weight: bold;
}
.delete-cart.link:focus,
.delete-cart.link:active{
  outline: none;
}

.subtotal-price{
  font-size: 14px;
}
.prices{
  font-size: 15px;
}
.total-price{
  font-weight: bold;
}
</style>