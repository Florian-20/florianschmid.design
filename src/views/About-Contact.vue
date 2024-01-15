<template>
  <div id="about" class="grain">
    <div class="projectPageContainer">
      <div id="about-container">
        <div id="intro" class="about-flex slide-small">
          <p>Intro</p>
          <span></span>
          <div class="about-child">
            <h2>
              <!--<strong>"Inspiration is for amateurs. The rest of us just work." Chuck Close</strong> <br><br>-->
              Hi, my name is Florian. 
              I am a Graphic Designer and self-taught front end Web developer based in Switzerland.
              I like to craft things and express myself in the language of design.
              That's all you need to know, everything else shows up in my work.
            </h2>
          </div>
        </div>
        <div id="skills" class="about-flex slide-small">
          <p>Skills</p>
          <span></span>
          <div class="about-child-b">
            <div class="skillset">
              <h3>Graphics</h3>
              <p>→Photoshop, InDesign, <br/>After Effects, Illustrator</p>
            </div>
            <div class="skillset">
              <h3>Coding</h3>
              <p>→Html5, Css3, Scss</p>
              <p>→Vuejs</p>
            </div>
            <div class="skillset">
              <h3>CGI & CAD</h3>
              <p>→Blender</p>
              <p>→Fusion 360</p>
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
  h2 {
    text-transform: none;
    margin-bottom: 1rem;
  }
  width: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 2rem;
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