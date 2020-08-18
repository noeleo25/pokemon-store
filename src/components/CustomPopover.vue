<template>
  <div :class="['dropdown-group', mainClass]">
    <button
      :class="['custom-dropdown-btn', buttonClass]"
      @click.stop="toggleDropdown">
      <slot name="button-content"></slot>
    </button>
    <div :class="dropdownClass"
      v-click-outside="closeDropdown">
      <div class="triangle-container">
        <div class="triangle-with-shadow"></div>
      </div>
      <slot name="dropdown-content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      mainClass:{
        type: String,
        required: false
      },
      buttonClass:{
        type: String,
        required: false
      }
    },
    data() {
      return {
        dropdownClass: 'dropdown-list'
      }
    },
    methods: {
      toggleDropdown(){
        if(this.dropdownClass == 'dropdown-list')
          this.dropdownClass = 'dropdown-list show';
        else
          this.dropdownClass = 'dropdown-list';
      },
      closeDropdown(){
        this.dropdownClass = 'dropdown-list';
      },
    },
    watch: {
      $route (){
        this.closeDropdown(); //close dropdown if view (route changes)
      }
    },
  }
</script>

<style scoped>
.dropdown-group{
  position: relative;
  height: 40px;
  position: relative;
  display: inline-block;
}
.dropdown-group > button{
  align-items: center;
}
.dropdown-list{
  position: absolute;
  min-width: 310px;
  z-index: 20;
  top: 50px;
  right: 0;
  visibility: hidden;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: rgba(45, 51, 136, 0.8); 
  border-radius: 0 0 5px 5px;
  padding-bottom: 16px;
  transition: opacity 0.5s;
  opacity: 0;
  z-index: 19999999999;
}
.dropdown-list ul{
  list-style: none;
  padding: 0px;
  margin: 0;
}
.dropdown-list.show{
  visibility: visible;
  opacity: 1;
}
.dropdown-list .dropdown-option{
  padding: 8px 24px;
}
.dropdown-list .dropdown-option > a{
  color: var(--dark-text);
  display: block;
  cursor: pointer;
}
.dropdown-list .dropdown-option > a:hover{
  text-decoration: none;
  color: var(--accent-orange);
}
.dropdown-list .dropdown-option > a{
  font-size: 12px;
  line-height: 1;
  color: var(--dark-text);
}
.custom-dropdown-btn:active,
.custom-dropdown-btn:focus{
  border: none;
  outline: none;
}

/*** CartPopover ***/
.cart-btn{
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  position: relative;
}
.cart-btn:hover,
.cart-btn:focus,
.cart-btn:visited{
  color: var(--yellow);
  background: none;
  box-shadow: none;
}
.cart-btn:hover .cart-badge{
  color: var(--purple) !important;
  background: var(--yellow) !important;
}
.triangle-container{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 0;
}
.triangle-with-shadow {
  width: 32px;
  height: 24px;
  position: relative;
  top: -24px;
  right: 0;
  overflow: hidden;
  z-index: 1;
}
.triangle-with-shadow:after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: rgba(45, 51, 136, 0.8); 
  transform: rotate(45deg);
  bottom: -10px;
  left: 6px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
</style>