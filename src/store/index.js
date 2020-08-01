import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList:[
      {
        id: 1,
        name: 'Charizard',
        type: 'Fire', 
        color: 'red',
        ability: {
          name: 'Llama firme',
          description: 'Los ataques de este Pokemon hacen 30 puntos de dano mas al Pokémon activo de tu rival.'
        },
        img: './images/charizard.png',
        prices:{
          mxn: 500.00,
          usd: 25.00
        },
        rate: 4
      },
      {
        id: 2,
        name: 'Squirtle',
        type: 'Water',
        color: 'blue',
        ability: {
          name: 'Escudo Caparazon',
          description: 'Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokemon por ataques.'
        },
        img: './images/squirtle.png',
        prices:{
          mxn: 450.00,
          usd: 22.50
        },
        rate: 3
      },
      {
        id: 3,
        name: 'Pikachu',
        type: 'Electric',
        color: 'yellow',
        ability: {
          name: 'Escudo Caparazon',
          description: 'Este ataque hace 50 ptos de daño por cada carta de Energía que hayas descartado.'
        },
        img: './images/pikachu.png',
        prices:{
          mxn: 950.00,
          usd: 45.00
        },
        rate: 4.5
      },
      {
        id: 4,
        name: 'Mewtwo',
        type: 'Psychic',
        color: 'purple',
        ability: {
          name: 'Proyectil Estallido',
          description: 'Este ataque hace 30 ptos de daño por cada carta de Energía unida a este Pokemon.'
        },
        img: './images/mewtwo.png',
        prices:{
          mxn: 5000.00,
          usd: 250.00
        },
        rate: 5
      },
      {
        id: 5,
        name: 'Bulbasaur',
        type: 'Grass',
        color: 'green',
        ability: {
          name: 'Hiedra adormidera',
          description: 'El pokémon defensor pasa a estar dormido.'
        },
        img: './images/bulbasaur.png',
        prices:{
          mxn: 300.00,
          usd: 15.00
        },
        rate: 1
      },
      {
        id: 6,
        name: 'Jigglypuff',
        type: 'Fairy',
        color: 'pink',
        ability: {
          name: 'Melodía curativa',
          description: 'Cura 10 puntos de daño a cada uno de tus Pokémon.'
        },
        img: './images/jigglypuff.png',
        prices:{
          mxn: 390.00,
          usd: 14.00
        },
        rate: 3
      }
    ],
    cartItems: [
    ],
    cartStatus: 0, //0 default, 1 reservado, 2 pagado
  },
  mutations: {
    PUSH_ITEM(state, item) //item is payload 
    {
      state.cartItems.push(item);
    },
    DELETE_ITEM(state, itemId) //item is payload 
    {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== itemId
      )
    },
  },
  actions: {
    addItem({ commit, state }, item) {
      //Consultamos que no exista el item en el carrito (no duplicar)
      const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id == item.id);
      if(itemIndex == -1){
        commit('PUSH_ITEM', item);
          //Aqui podriamos agregar una notificacion 'Success'
      }else{
        //Aqui podriamos agregar una notificacion 'Error'
      }
    },
    deleteItem({ commit }, itemId) {
      commit('DELETE_ITEM', itemId);
      //Notificacion
    },
  },
  getters: {
    totals: (state)  => {
      var total = 0;
      var subtotal = 0;
      state.cartItems.forEach(item => {
        let price = item.prices.mxn;
        subtotal += price;
        total += (price + price*.1); //10% iva
      });
      return {
                subtotal: subtotal,  
                total: total, 
            };
    },
    bestItems: (state)  => {
      return state.productList.filter(item => item.rate == 5);
    },
    getItemsByRate: (state) => (rate) => {
      return state.productList.filter(item => item.rate == rate);
    },
  }
});
