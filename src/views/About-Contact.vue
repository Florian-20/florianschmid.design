<template>
  <div id="page" class="grain">
    <div id="aboutPageContainer">
      <div id="aboutDescription">
        <div id="intro" class="about-flex slide-small">
          <p>Intro</p>
          <div class="about-child">
            <h2>
              Hi, my name is Florian. 
              I am a Graphic Designer and self-taught front end Web developer based in Switzerland.
              I like to craft things and express myself in the language of design.
            </h2>
          </div>
        </div>
        <div id="skills" class="about-flex slide-small">
          <p>Skills</p>
          <div class="about-child-b">
            <div class="skillset">
              <h3>Graphics</h3>
              <p>→Photoshop, Indesign, Illustrator, AfterEffects, XD</p>
            </div>
            <div class="skillset">
              <h3>Coding</h3>
              <p>→Html5, Css3, Scss</p>
              <p>→Vuejs</p>
            </div>
            <div class="skillset">
              <h3>CGI&CAD</h3>
              <p>→Fusion 360</p>
              <p>→Blender</p>
            </div>
          </div>
        </div>
        <div id="contact" class="about-flex slide-small">
          <p>Contact</p>
          <div class="about-child">
            <a id="mail-to" href="mailto:contact@florianschmid.design">contact@florianschmid.design</a>
          </div>
        </div>
      </div>
      <div class="slide-small">
        <img src="../assets/images/About/Florian_Schmid-500x500.jpg" alt="">
      </div>
      <div id="grey"></div>
    </div>
  </div>
</template>

<script>

import { gsap } from 'gsap'

export default {
  metaInfo : {
    Meta: [
        { name: 'description', content: 'Hi, my name is Florian. I am a Graphic Designer and self-taught front end Web developer based in Switzerland.'}
    ]
  },
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

#aboutPageContainer {
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-left: 7vw;
  margin-right: 7vw;
  display: flex;
  align-self: center;
  max-width: 1400px;
  flex-direction: row;
  justify-content: space-evenly;
  img {
    max-width: fit-content;
  }
}

#about {
    position: absolute;
    height: auto;
    min-height: 100%;
    width: 100%;
    background-position: center;
}

#grey {
  height: 100vh;
}

#aboutDescription {
  h2 {
    text-transform: none;
    margin-bottom: 1rem;
  }
  width: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.about-flex {
  width: 100%;
  margin-top: 1rem;
}

.about-child {
  width: 66%;
  margin-top: .5rem;
  a {
    font-size: 30px;
  }
}

.about-child-b {
  justify-content: space-evenly;
  display: flex;
  width: 66%;
  margin-top: .5rem;
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

#mail-to:hover {
  text-decoration: underline;
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

@media screen and (max-width: 990px) {
  #aboutPageContainer {
    margin-left: 2rem;
    margin-right: 2rem;
    flex-direction: column;
  }
  #grey {
    height: 30vh;
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
  #aboutPageContainer {
    margin-left: 1rem;
    margin-right: 1rem;
    img {
    max-width: 100%;
  }
  }
  #grey {
    height: auto;
  }
}


</style>