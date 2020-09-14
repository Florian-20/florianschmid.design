<template>
  <div id="app">
    <div id="nav">
      <h3>Florian Schmid</h3>
      <span></span>
      <router-link to="/">Work</router-link>
      <router-link to="/about&contact">About&<br>Contact</router-link>
      <div id="mode"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
// --- Colours --- //

$Black: #151515;
$Lightgrey: #F5F5F5;

html,
body {
  margin: 0;
  padding: 0;
  background-color: $Lightgrey;
  color: $Black;
}

#app {
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

h1 {
  font-family: "Neue Machina Ultrabold";
  font-size: 210px;
  line-height: 170px;
  text-align: left;
  text-transform: uppercase;
  margin: 0;
}

h2 {
  font-family: "Neue Machina Regular";
  font-size: 42px;
  line-height: 41px;
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
}

a {
  margin: 0;
  font-family: "Neue Machina Regular";
  font-size: 18px;
  line-height: 17px;
  color: $Black;
  text-decoration: none;
  text-transform: uppercase;
}

marquee {
  margin: 0;
  font-family: "Neue Machina Regular";
  font-size: 18px;
  line-height: 17px;
  text-decoration: none;
  text-transform: uppercase;
}

// --- Page style --- //

#nav {
  margin-top: 4.5vh;
  margin-left: 2.5vw;
  margin-right: 2.5vw;
  display: flex;
  align-items: start;
  span {
    flex-grow: 1;
  }
  a {
    margin-left: 3%;
    font-weight: bold;

    &.router-link-exact-active {
      text-decoration-line: underline;
    }
  }
}

#mode {
  margin-left: 3%;
  width: 30px;
  height: 30px;
  background: $Black;
}
</style>
