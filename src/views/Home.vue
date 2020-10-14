<template>
  <div class="home py-4">
     <b-alert
      v-if="alert != null"
      :show="alert.show"
      :variant="alert.variant"
    >
    <b> {{ alert.message }} </b>
    <button 
      @click="closeAlert()" 
      class="close-alert">x</button>
    </b-alert>
    <h1 class="main-title pokemon-solid-font">
      Bienvenido a la tienda
      <br>
      <strong 
        :class="['pokemon-word', pokemonWordCs] "
        @mouseover="pokemonWordCs = 'pokemon-solid-font'"
        @mouseleave="pokemonWordCs = 'pokemon-font'">
        PoKéMoN
      </strong>
    </h1>

    <main class="mt-5 py-4">
      <b-container>
        <section id="best-sellers" class="mb-5">
          <div class="section-title mb-4">
            <h2 class="mb-0 pokemon-solid-font">
              Favoritos
            </h2>
          </div>
          <b-row>
            <b-col 
              cols="12"
              sm="6"
              md="4" 
              class="d-flex justify-content-center mb-4"
              v-for="poke in pokemons"
              :key="poke.id">
              <b-card class="pokemon-card">
                <div :class="['card-content',
                               poke.color]">
                  <div class="pokemon-name">
                    <p class="mb-0 d-flex align-items-center justify-content-between">
                      {{ poke.name }}
                      <span class="pokemon-type">
                        <IconBase
                          class="trash-icon"
                          icon-name="trash"
                          
                          width="22"
                          height="22">
                          <component :is="poke.type+'Icon'">
                          </component>
                        </IconBase>
                      </span>
                    </p>
                  </div>
                  <b-img :src="poke.img" fluid :alt="'Pokemon: '+ poke.name">
                  </b-img>
                  <div class="mt-2">
                    <p class="pokemon-ability text-justify">
                      <b>{{ poke.ability.name }}:</b>
                      <span> {{ poke.ability.description }} </span>
                    </p>
                  </div>
                  <div class="mt-2 d-flex justify-content-between">
                    <div class="pokemon-price">
                      $ <b>{{poke.prices.mxn}}</b> <small>MXN</small>
                    </div>
                    <div class="pokemon-rating">
                      <RatingComponent 
                        :rating="poke.rate"
                        :showNumber="false"
                      />
                    </div>
                  </div>
                </div>
                <div 
                  class="card-backdrop d-flex align-items-center justify-content-center" 
                  @click="addToCart(poke)">
                  <b-img 
                    class="pokeball-img"
                    :src="'./images/Pokeball.svg'"
                    alt="backdrop-addtoCart">
                  </b-img>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </section>
      </b-container>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import RatingComponent from '@/components/RatingComponent.vue';
import FireIcon from '@/components/icon/FireIcon.vue';
import WaterIcon from '@/components/icon/WaterIcon.vue';
import ElectricIcon from '@/components/icon/ElectricIcon.vue';
import GrassIcon from '@/components/icon/GrassIcon.vue';
import FairyIcon from '@/components/icon/FairyIcon.vue';
import PsychicIcon from '@/components/icon/PsychicIcon.vue';
export default {
  name: "Home",
  components: {
    RatingComponent,
    FireIcon,
    WaterIcon,
    ElectricIcon,
    GrassIcon,
    FairyIcon,
    PsychicIcon
  },
  data() {
    return {
      pokemonWordCs: 'pokemon-font',
    }
  },
  methods: {
    addToCart(item){
      //console.log(item);
     // return this.$store.dispatch('addItem', item);
     //accediendo a modules
     return this.$store.dispatch('shoppingCart/addItem', item);
    },
    closeAlert(){
      this.$store.dispatch('removeAlert');
    }

  },
  computed:{
    pokemons(){
      return this.$store.state.productList;
      //return this.$store.getters['bestItems'];
      //return this.$store.getters['getItemsByRate'](3);
    },
    alert(){
      return this.$store.state.alert;
    }
  }
};
</script>

<style scoped>
.main-title{
  font-size: 3em;
  line-height: 1.4;
  color: var(--blue);
}
.pokemon-word{
  font-size: 1.5em;
  color: var(--yellow);
  /*background: linear-gradient(90deg, red, orange, yellow, green, blue, purple);*/
  background: var(--yellow);
  background-clip: text;
  -webkit-background-clip: text;
}
.pokemon-word:hover {
  color: transparent;
  transition: 500ms ease;
}
.section-title{
  color: var(--dark-red);
  border-bottom: 2px solid var(--yellow);
}
.section-title > h2{
  color: #000;
  text-align: left;
  line-height: 2.2;
}
.pokemon-name{
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.pokemon-card{
  background: beige;
  position: relative;
  height: 100%;
  max-width: 280px;
}
.pokemon-card .card-content{
  padding: 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pokemon-card .card-content.red{
  background: sandybrown;
}
.pokemon-card .card-content.blue{
  background: rgb(96, 209, 244);
}
.pokemon-card .card-content.yellow{
  background: rgb(244, 222, 96);
}
.pokemon-card .card-content.purple{
  background: rgb(156, 118, 245);
}
.pokemon-card .card-content.green{
  background: rgb(96, 244, 170);
}
.pokemon-card .card-content.pink{
  background: rgb(241, 99, 206);
}
.pokemon-card .card-body{
  padding: .7rem;
}
.pokemon-card .card-backdrop{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(63, 59, 59, 0.5);
  opacity: 0;
  transition: opacity 0.4s ease-in;
  z-index: 2;
  left: 0;
  top:0;
  cursor: pointer;
}
.pokemon-card:hover .card-backdrop{
  opacity: 1;
}
.pokemon-card .pokemon-ability{
  font-size: 0.8em;
}
.pokemon-card .pokemon-type{
  border: 1px solid;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pokeball-img{
  max-width: 100%;
  max-height: 100%;
}
.close-alert{
  border-radius: 50%;
  color: inherit;
  border: none;
  width: 20px;
  height: 20px;
  font-size: 10px;
  position: absolute;
  top: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
}
</style>
