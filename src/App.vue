<template>
  <div id="app">
    <router-view  :loading="loading" v-on:switch-mode="onSwitch" :darkmode="darkmode" v-bind:style='{"--light" : (darkmode? "#151515" : "#f5f5f5" ), "--dark" : (darkmode? "#f5f5f5" : "#151515"), "background-color" : "var(--light)", "color" : "var(--dark)"}'/>
  </div>
</template>

<script>


export default {
  data () {
    return {
      darkmode: false,
      loading: true
    }
  },
  methods: {
    onSwitch() {
      this.darkmode = !this.darkmode
    },
    setloading(value) {
      this.loading = value
    }
  },
  mounted() {
    setTimeout(() => {
      this.setloading(false)
    }, 3000)
  },
  created() {
    var timenow = new Date()
    var time = timenow.getHours()
    console.log("Welcome inspector. It's " + time + " a clock.")
    console.log("%c 👋 Welcome inspector. It's " + time + " a clock.", "font-size: 15px");
    if (time >= 18 || time <= 8) {
      this.darkmode = true
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

strong {
  font-family: 'Neue Machina Ultrabold';
  font-weight: 200;
}

// - Project Fonts -- //

@font-face {
  font-family: aktiv-grotesk,sans-serif;
  src: url('https://use.typekit.net/dil0dtn.css');
  font-weight: 400;
  font-style: normal;
  display: auto;
}

@font-face {
  font-family: aktiv-grotesk,sans-serif;
  src: url('https://use.typekit.net/dil0dtn.css');
  font-weight: 500;
  font-style: normal;
}

// --- Headers --- // 

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Neue Machina Regular";
  font-size: 18px;
  line-height: 17px;
  -webkit-tap-highlight-color: transparent;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  line-height: 1.15;
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
  line-height: 1.2;
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
    line-height: 1.1;
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
    line-height: 1.15;
  }
  h2 {
    font-size: 27px;
    line-height: 1.15;
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

#whois {
  height: 4rem;
  background-color: var(--light);
  display: flex;
  left: 0;
  right: 0;
  justify-content: center;
  p {
    margin-top: 2rem;
    font-size: 14px;
  }
}

// ---- Project rules --- //

.project {
    margin-top: 7rem;
    margin-bottom: 10rem;
    margin-left: 7vw;
    margin-right: 7vw;
    height: auto;
    display: flex;
    flex-direction: column;
}


.container {
  margin-top: 4.5vh;
  margin-left: 2vw;
  margin-right: 2vw;
  height: auto;
}

.vimeo-container {
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
  margin-top: 12rem;
  iframe {
    width: calc(1.66 * 640px);
    height: calc(1.66 * 360px);
  }
}

// --- Mobile --- //

@media screen and (max-width: 990px) {
    .project {
        margin-top: 4rem;
        margin-bottom: 4rem;
        margin-left: unset;
        margin-right: unset;
    }
}

@media screen and(max-width: 600px) {
    .container {
      margin-top: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .vimeo-container {
      margin-top: 0rem;
      margin-bottom: 0rem;
    }
}
</style>
