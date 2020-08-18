
//agregar hasta que se hable de namespacing
export const namespaced = true 

//Opc 2
export const state = { 
  cartItems: [],
  cartStatus: 0, //0 default, 1 reservado, 2 pagado
}
export const mutations = {
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
}
export const actions = { 
  addItem({ commit, state }, item) {
    //Consultamos que no exista el item en el carrito (no duplicar)
    const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id == item.id);
    if(itemIndex == -1){
      commit('PUSH_ITEM', item);
        //Aqui podriamos agregar una notificacion 'Success'
        /*const notification = {
          type: 'success',
          message: 'Se agrego un curso al carrito',
        }
        dispatch('notification/add', notification, { root: true });*/
    }else{
      //Aqui podriamos agregar una notificacion 'Error'
    }
  },
  deleteItem({ commit }, itemId) {
    commit('DELETE_ITEM', itemId);
    //Notificacion
  },
}
export const getters = { 
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
  totalCartItems: state => {
    return state.cartItems.length;
  },
}


