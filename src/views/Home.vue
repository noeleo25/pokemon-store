<template>
  <div class="home py-4">
    <h1 class="main-title pokemon-solid-font">
      Bienvenido a la tienda
      <br>
      <strong class="pokemon-font pokemon-word">
        PoKéMoN
      </strong>
    </h1>

    <main class="mt-5 py-4">
      <b-container>
        <section id="best-sellers" class="mb-5">
          <div class="section-title mb-4">
            <h2 class="mb-0 pokemon-solid-font"> Lo mas vendido </h2>
          </div>
          <b-row>
            <b-col 
              cols="4" 
              v-for="poke in pokemons"
              :key="poke.id">
              <b-card class="pokemon-card">
                <div class="card-content red">
                  <div class="pokemon-name">
                    <p class="mb-0 d-flex align-items-center justify-content-between">
                      {{ poke.name }}
                      <span>
                        {{ poke.type }}
                      </span>
                    </p>
                  </div>
                  <b-img :src="poke.img" fluid></b-img>
                  <div class="">
                    <p class="pokemon-hability">
                      <b>{{ poke.hability.name }}:</b>
                      <span> {{ poke.hability.description }} </span>
                    </p>
                  </div>
                </div>
                <div class="card-backdrop"></div>
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


export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      pokemons: [
        {
          id: 1,
          name: 'Charizard',
          type: 'fire', //fire
          color: 'red',
          hability: {
            name: 'Llama firme',
            description: 'Los ataques de este Pokemon hacen 30 puntos de dano mas al Pokemon activo de tu rival'
          },
          img: './images/charizard.png'
        }
      ]  
    }
  },
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
/*
.section-title{
  text-align: left;
  background-color: #000;
  color: #fff;
  position: relative;
}
.section-title > h2{
  font-size: 1.8rem;
  padding: 4px 16px;
}
.section-title::before{
  content: '';
  position: absolute;
  top: -9px;
  left:0;
  width: 100%;
  height: 9px;
  background: var(--dark-red);
  border-top: 1px solid #000;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.section-title::after{
  content: '';
  position: absolute;
  bottom: -9px;
  left:0;
  width: 100%;
  height: 9px;
  background: #fff;
  border-bottom: 1px solid #000;
   border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}*/
.pokemon-name{
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.pokemon-card{
  background: beige;
  position: relative;
}

.pokemon-card .card-content{
  padding: 0.5rem;
}
.pokemon-card .card-content.red{
  background: sandybrown;
}
.pokemon-card .card-body{
  padding: .7rem;
}

.pokemon-card .card-backdrop{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 67, 67, 0.5);
  opacity: 0;
  transition: opacity 0.15s ease-in;
  z-index: 2;
  left: 0;
  top:0;
}
.pokemon-card:hover .card-backdrop{
  opacity: 1;
}


</style>
