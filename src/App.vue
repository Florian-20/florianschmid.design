<template>
  <div id="app">
    <loader v-if="loading"/>
    <transition :name="rTransition">
      <router-view class="child-view"/>
    </transition>
  </div>
</template>

<script>

import loader from '@/components/loader.vue'

export default {
  components: {
    loader
  },
  data () {
    return {
      loading: false,
      rTransition: undefined
    }
  },
  /*watch: {
    '$route'(to, from) {
      const to_depth = to.path.split('/').length
      const from_depth = from.path.split('/').length
      this.rTransition = to_depth < from_depth ? this.loadingState(true) : this.loadingState(true)
      console.log("Route Change")
      console.log(this.loadingState)
    }
  },
  /*beforeMount () {
    setTimeout (() => {
      this.loadingState(false)
    }, 3000)
  },*/
  methods: {
    loadingState (value) {
      this.loading = value
    }
  }
}
</script>

<style lang="scss">

#app {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// ---- Fonts ---- //

@font-face {
    font-family: 'Neue Machina Regular';
    src: url('./assets/fonts/NeueMachina-Regular.eot') format('embedded-opentype'),
         url('./assets/fonts/NeueMachina-Regular.woff2') format('woff2'), 
         url('./assets/fonts/NeueMachina-Regular.woff') format('woff'); 
    font-weight: 600;
    font-style: normal;
    font-display: auto;
}

@font-face {
  font-family: 'Neue Machina Ultrabold';
  src: url('./assets/fonts/NeueMachina-Ultrabold.eot') format('embedded-opentype'),
       url('./assets/fonts/NeueMachina-Ultrabold.woff') format('woff'),
       url('./assets/fonts/NeueMachina-Ultrabold.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}


// --- Headers --- // 

:root {
  --dark: #151515;
  --light: #f5f5f5;
  cursor: default;
}

html,
body {
  color: var(--dark);
  background-color: var(--light);
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Neue Machina Regular";
  font-size: 18px;
  line-height: 17px;
}

h1 {
  font-family: "Neue Machina Ultrabold";
  font-size: 160px;
  line-height: 150px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
}

h2 {
  font-family: "Neue Machina Regular";
  font-size: 30px;
  line-height: 29px;
  margin: 0;
  text-align: left;
  text-transform: uppercase;
}

h3 {
  font-family: "Neue Machina Regular";
  font-size: 23px;
  line-height: 22px;
  text-align: left;
  margin: 0;
  text-transform: uppercase;
}

p {
  font-family: "Neue Machina Regular";
  font-size: 18px;
  line-height: 17px;
  margin: 0;
  text-transform: uppercase;
}

a {
  color: var(--dark);
  margin: 0;
  font-family: "Neue Machina Regular";
  font-size: 18px;
  line-height: 17px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2px;
}

// --- Responsiv --- //

@media screen and(max-width: 1600px) {
  html,
  body {
    font-size: 16px;
  }

  h1 {
    font-size: 140px;
    line-height: 135px;
  }

  h2 {
    font-size: 27px;
    line-height: 26px;
  }

  h3 {
    font-size: 21px;
  }

  p {
    font-size: 16px;
  }

  a {
    font-size: 16px;
  }
}

@media screen and (max-width: 990px) {
  h1 {
    font-size: 100px;
    line-height: 120px;
  }
  h2 {
    font-size: 27px;
    line-height: 27px;
  }
}

// ---- General Style --- //

.grain {
  position: absolute;
  height: auto;
  z-index:300;
}

.grain:before {
 content:"";
 top:-10rem;
 left:-10rem;
 width: 200%;
 height: 200%;
 z-index:9999;
 position:fixed;
 background-image:url("./assets/images/noise.png");
 opacity: .2;
 pointer-events:none;
 -webkit-animation:noise 1s steps(2) infinite;
 animation:noise 1s steps(2) infinite
}

@keyframes noise {
 0% {
  transform:translate3d(0,9rem,0)
 }
 10% {
  transform:translate3d(-1rem,-4rem,0)
 }
 20% {
  transform:translate3d(-8rem,2rem,0)
 }
 30% {
  transform:translate3d(9rem,-9rem,0)
 }
 40% {
  transform:translate3d(-2rem,7rem,0)
 }
 50% {
  transform:translate3d(-9rem,-4rem,0)
 }
 60% {
  transform:translate3d(2rem,6rem,0)
 }
 70% {
  transform:translate3d(7rem,-8rem,0)
 }
 80% {
  transform:translate3d(-9rem,1rem,0)
 }
 90% {
  transform:translate3d(6rem,-5rem,0)
 }
 to {
  transform:translate3d(-7rem,0,0)
 }
}

// ---- Project rules --- //

.container {
  margin-top: 4.5vh;
  margin-left: 2vw;
  margin-right: 2vw;
  height: auto;
}

// --- Mobile --- //

@media screen and(max-width: 600px) {
    .container {
      margin-top: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
}
</style>
