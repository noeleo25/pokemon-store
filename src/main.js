import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import IconBase from '@/components/icon/IconBase.vue'
Vue.component('IconBase', IconBase)

Vue.use(BootstrapVue);


Vue.directive('click-outside',{
  bind: function (el, binding, vnode) {
      el.eventSetDrag = function () {
          el.setAttribute('data-dragging', 'yes');
      }
      el.eventClearDrag = function () {
          el.removeAttribute('data-dragging');
      }
      el.eventOnClick = function (event) {
          var dragging = el.getAttribute('data-dragging');
          // Check that the click was outside the el and its children, and wasn't a drag
          if (!(el == event.target || el.contains(event.target)) && !dragging) {
              // call method provided in attribute value
              vnode.context[binding.expression](event);
          }
      };
      document.addEventListener('touchstart', el.eventClearDrag);
      document.addEventListener('touchmove', el.eventSetDrag);
      document.addEventListener('click', el.eventOnClick);
      document.addEventListener('touchend', el.eventOnClick);
  }, unbind: function (el) {
      document.removeEventListener('touchstart', el.eventClearDrag);
      document.removeEventListener('touchmove', el.eventSetDrag);
      document.removeEventListener('click', el.eventOnClick);
      document.removeEventListener('touchend', el.eventOnClick);
      el.removeAttribute('data-dragging');
  },
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
