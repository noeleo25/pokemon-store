<template>
  <div :class="['rating-stars', colorClass]">
    <div class="stars-area d-flex justify-content-end
      align-items-center">
      <IconBase
        v-for="(star, index) in stars"
        :key="index"
        class="ml-1"
        width="10.3"
        height="9.8"
        >
        <RateStarIcon/>
      </IconBase>
      <IconBase
        v-if="halfstar"
        class="ml-1"
        width="10.3"
        height="9.8"
        >
        <RateHalfStarIcon/>
      </IconBase>
      <IconBase
        v-for="(star, index) in nostars"
        :key="index+5"
        class="ml-1"
        width="10.3"
        height="9.8"
        iconColor="#dbdbdb"
        >
        <RateStarIcon/>
      </IconBase>
    </div>
    <div class="rate-area" v-if="showNumber">
      {{ rating }}
    </div>
  </div>
</template>

<script>
  import RateStarIcon from '@/components/icon/RateStarIcon.vue'
  import RateHalfStarIcon from '@/components/icon/RateHalfStarIcon.vue'
  export default {
    components: {
      RateStarIcon,
      RateHalfStarIcon
    },
    props: {
      rating:{
        Type: Number,
        required: true,
      },
      colorClass: {
        Type: String,
        default: 'white'
      },
      showNumber: {
        Type: Boolean,
        default: true,
      }
    },
    computed: {
      stars(){
        return Math.floor(this.rating);
      },
      nostars(){
        return Math.floor(5-this.rating);
      },
      halfstar(){
        const decimal = (this.rating + "").split('.');
        if(decimal[1] > 0)
          return true;
        return false;
      }
    },
  }
</script>

<style>
.rating-stars{
  position: relative;
  border: 1px solid;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border-right: none;
}
.rating-stars.white{
  color: #fff;
}

.stars-area{
  width: 96px;
  height: 20px;
  background-color: var(--light-bg);
  border-radius: 10px;
  padding-right: 10px;
  padding-left: 10px;
}
.rate-area{
  position: absolute;
  left: 0;
  top: -5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}
</style>