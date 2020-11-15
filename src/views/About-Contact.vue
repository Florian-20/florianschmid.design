<template>
  <div id="about" class="grain">
    <div class="container">
      <div id="head">
        <div class="type">
          <h3>Florian Schmid</h3>
        </div>
        <div id="fix">
          <router-link v-if="!mobileView" to="/">Work</router-link>
          <router-link v-if="!mobileView" to="/about&contact">About&<br />Contact</router-link>
          <svg @click="$router.go(-1)" xmlns="http://www.w3.org/2000/svg" width="39.409" height="39.409" viewBox="0 0 39.409 39.409">
            <g transform="translate(4.7046301 4.7046301)">
              <path fill="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="2" d="M29.50819672 30V0H0"/>
              <path fill="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="2" d="M30 0L.98360656 29.5"/>
            </g>
          </svg>
        </div>
      </div>
      <div id="about-container">
        <div id="intro" class="about-flex slide-small">
          <p>Intro</p>
          <span></span>
          <div class="about-child">
            <h2>
              Hi, my name is Florian. 
              I am a Graphic Designer and selfthought front end Web developer based in Switzerland. 
              I am currently in my final graphic design training year at Schule für Gestaltung bern&Biel. 
              I like to develop outstanding and long term Designs and Websites who function technically and visually.
            </h2>
          </div>
        </div>
        <div id="skills" class="about-flex slide-small">
          <p>Skills</p>
          <span></span>
          <div class="about-child-b">
            <div class="skillset">
              <h3>Graphics</h3>
              <p>→Adobe programs</p>
              <p>→Invision</p>
            </div>
            <div class="skillset">
              <h3>Coding</h3>
              <p>→Html5, Css3, Scss</p>
              <p>→Vuejs</p>
              <p>→Python3</p>
            </div>
            <div class="skillset">
              <h3>3D&Modelling</h3>
              <p>→Autodesk Maya & Arnold render</p>
              <p>→Cinema 4D</p>
              <p>→Substance Designer</p>
            </div>
          </div>
        </div>
        <div id="contact" class="about-flex slide-small">
          <p>Contact</p>
          <span></span>
          <div class="about-child">
            <a id="mail-to" href="mailto:contact@florianschmid.design">contact@florianschmid.design</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { gsap } from 'gsap'

export default {
  methods: {
    slideInSmall() {
      var tl = gsap.timeline()
      tl.from('.slide-small', {
          delay: 0.5,
          transformOrigin: "Bottom Left",
          rotateZ: "3deg",
          duration: 1,
          opacity: 0,
          y: 50,
          stagger: 0.1,
          ease: "power4"
      })
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
  created() {
    this.handleView()
  },
  mounted () {
    this.slideInSmall()
  }
}
</script>

<style lang="scss" scoped>

#head {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  right: 2vw;
  left: 2vw;
}

.type {
  width: auto;
  max-width: 20vw;
  display: flex;
  h3 {
    margin-right: 2rem;
  }
}

#fix {
  z-index: 1000;
  position: fixed;
  display: flex;
  right: 2vw;
  a {
    margin-left: 3rem;
    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
  svg {
    stroke: var(--dark);
    margin-left: 5.6rem;
    cursor: pointer;
  }
}

#about {
    position: absolute;
    height: auto;
    min-height: 100%;
    width: 100%;
    background-position: center;
}

#about-container {
  width: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.about-flex {
  width: 100%;
  display: flex;
  margin-top: 2rem;
  span {
    flex-grow: 1;
  }
}

.about-child {
  width: 66%;
  a {
    font-size: 30px;
  }
}

.about-child-b {
  justify-content: space-evenly;
  display: flex;
  width: 66%;
  border-top: 1px solid var(--dark);
  border-bottom: 1px solid var(--dark);
  border-left: 1px solid var(--dark);
}

.skillset {
  border-right: 1px var(--dark) solid;
  width: 100%;
  height: auto;
  padding: .75rem;
  h3 {
    margin-bottom: .5rem;
  }
}

#mail-to {
  cursor: pointer;
}

@media screen and(max-width: 990px) {
  #about-container {
    flex-direction: column;
  }
  .about-flex {
    flex-direction: column;
    p {
      margin-bottom: 0.5rem;
    }
  }
  .about-child, .about-child-b {
    width: 100%;
  }
}

@media screen and(max-width: 600px){
 .about-child-b {
    flex-direction: column;
  }
  .skillset {
    padding: 0.75;
    width: auto;
  }
  #mail-to {
    font-size: 18px;
  }
}

</style>