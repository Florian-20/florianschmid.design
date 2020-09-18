<template>
  <div id="app">
    <router-view/>
  </div>
</template>



<style lang="scss">
// --- Colours --- //


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
  --light: #F5F5F5;
}

html,
body {
  background-color: var(--light);
  margin: 0;
  padding: 0;
  font-family: "Neue Machina Regular";
  font-size: 18px;
  line-height: 17px;
  text-transform: uppercase;
}

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
  color: var(--dark);
  margin: 0;
  font-family: "Neue Machina Regular";
  font-size: 18px;
  line-height: 17px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2px;
}
@media screen and(max-width: 1400px) {
  html,
  body {
    font-size: 16px;
  }

  h1 {
    font-size: 170px;
  }

  h2 {
    font-size: 37px;
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

// --- Page style --- //

</style>
