<template>
    <div id="nav">
      <h3 id="first" class="slide-nav" v-if="!mobileView">Florian Schmid</h3>
      <p class="slide-nav" v-if="mobileView">Florian<br>Schmid</p>
      <span v-if="!mobileView"></span>
      <router-link class="slide-nav" v-if="!mobileView" to="/" id="second">Work</router-link>
      <router-link class="slide-nav" to="/about&contact" id="third">About&<br>Contact</router-link>
      <div class="slide-nav" id="modeswitch" @click="$emit('switch-mode')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 57.89">
          <g id="Ebene_2" data-name="Ebene 2">
          <g id="Switch">
          <rect id="Light" width="39" height="39" style="fill: #f5f5f5"/>
          <rect id="Dark" x="39" width="40" height="40" style="fill:#151515"/>
          <path id="D" data-name="Dark" d="M69.5,19c0,7.9-5.09,9.18-10,9.18H52.76V9.87h6.76C64.41,9.87,69.5,11.14,69.5,19Zm-4.16,0c0-5.25-2.57-5.51-5.82-5.51h-2.6v11h2.6C62.77,24.56,65.34,24.3,65.34,19Z" style="fill:#f5f5f5"/>
          <path id="L" data-name="Light" d="M13.67,26.27V9.87h4.16v15l8.92-.26V28.2l-10.84.26A2,2,0,0,1,13.67,26.27Z" style="fill:#151515"/>
          <g id="Edge"><path d="M79,1V39H1V1H79m1-1H0V40H80V0Z" style="fill: var(--dark)"/></g>
          <path id="State" d="M14.16,53A4.74,4.74,0,0,1,19,48.15a4.87,4.87,0,0,1,0,9.74A4.74,4.74,0,0,1,14.16,53Zm7.22,0A2.35,2.35,0,1,0,19,55.37,2.3,2.3,0,0,0,21.38,53Z" style="fill:var(--dark)"/>
          </g></g>
        </svg>
      </div>
    </div>
</template>

<script>

  import { gsap } from 'gsap'

  export default {
    name: 'topnav',
    props: ['darkmode', 'loading'],
    data () {
      return {
        mobileView: true
      }
    },
    methods: {
      handleView () {
        this.mobileView = window.innerWidth <= 990
      },
      checkSwitch() {
        if (this.darkmode == true) {
          gsap.set('#State', {
            x: 40
          })
        }
      },
      switchModeAnim() {
        var tween = gsap.fromTo('#State', {
            duration: 0.5,
            ease: 'power3.inOut',
            x: '0'
          },
          {
            duration: 0.5,
            x:'40'
          })
        if (this.darkmode == true) {
          tween.play()
        }
        if (this.darkmode == false) {
          tween.reverse(0)
        }
      },
      onload() {
        var tl = gsap.timeline()
        tl.from('.slide-nav', {
            delay: 0.5,
            transformOrigin: "Bottom Left",
            rotateZ: "3deg",
            duration: 0.8,
            opacity: 0,
            y: 30,
            stagger: 0.1,
            ease: "power4"
        })
      }
    },
    watch: {
      darkmode() {
        this.switchModeAnim()
      }
    },
    created() {
      this.handleView()
    },
    mounted() {
      this.checkSwitch()
      if (this.loading == true) {
        this.onload()
      }
    }
  }
</script>

<style lang="scss" scoped>


#nav {
  position: relative;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  span {
    flex-grow: 1;
  }
  a {
    margin-left: 3rem;
    font-weight: bold;

    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}

#modeswitch {
  height: 50px;
  width: 70px;
  margin-left: 3rem;
  cursor: pointer;
}

#first{
  animation-delay: 0.6s;
}

#second {
  animation-delay: 0.8s;
}

#third {
  animation-delay: 1s;
}

#fourth {
  animation-delay: 1.2s;
}

.navanim {
  margin-top: 2rem;
  opacity: 0%;
}


// --- Mobile --- // 

@media screen and (max-width: 600px){
  #nav {
    justify-content: space-between;
    padding: 1rem;
    a {
      margin-left: unset;
    }
  }
  #modeswitch {
    margin-left: unset;
  }
}

</style>