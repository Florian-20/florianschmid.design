<template>
  <div id="mainpage">
    <div class="top-page-container">
      <div id="project-title"><h1>{{ projectdata.name }}</h1></div>
      <div class="flex-container">
        <div class="flex-child">
          <h2 class="slide-small">{{ projectdata.desc }}</h2>
          <div id="infobox" class="slide-small">
            <h2 id="world">{{ projectdata.counter }}</h2>
            <div class="credits">
              <p>DATE<span/>{{ projectdata.date }}</p>
              <div></div>
              <p>TYPE<span/>{{ projectdata.type }}</p>
            </div>
          </div>
        </div>
        <div class="flex-child slide-small">
          <p>{{ projectdata.desc1 }}</p>
        </div>
        <div class="flex-child slide-small">
          <p>{{ projectdata.desc2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { gsap } from "gsap";

export default {
  name: "projectTop",
  props: {
    projectdata: null,
    startAnimation: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      mobileView: true,
    }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    slideIn() {
      var tl = gsap.timeline()
      tl.fromTo('#project-title', {
        y: 100,
        opacity: 0,
      },
      {
        delay: 0.3,
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "circ.out"
      })
    },
    slideInSmall() {
      var tl = gsap.timeline()
      tl.fromTo('.slide-small', {
          transformOrigin: "Bottom Left",
          rotateZ: "3deg",
          opacity: 0,
          y: 50,
      },
      {
        delay: 0.3,
        rotateZ: "0deg",
        opacity: 1,
        duration: 0.8,
        y: 0,
        stagger: 0.1,
        ease: "power4"
      })
    }
  },
  created() {
    this.handleView()
  },
  watch: {
    startAnimation(val) {
      if (val) this.slideIn(), this.slideInSmall();
    }
  }
};
</script>

<style lang="scss" scoped>

.slide-small {
  opacity: 0;
}

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
  }
  svg {
    stroke: var(--dark);
    margin-left: 5.6rem;;
    cursor: pointer;
  }
}

.top-page-container {
  margin-top: 2.5vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100%;
  align-items: center;
}

#project-title {
  margin-top: 4rem;
  margin-bottom: 7rem;
  opacity: 0;
  h1 {
    font-size: 130px;
    line-height: 120px;
  }
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.flex-child {
  width: 32%;
  p {
    text-transform: unset;
  }
}

#infobox {
  margin-top: 2rem;
  display: flex;
  border: 1px solid var(--dark);
  height: 55px;
  width: 340px;
  bottom: 11rem;  
  h2 {
    margin-top: .6rem;
    margin-left: .6rem;
    margin-right: .6rem;
  }
}

#world {
  animation: around 4s infinite linear;
}

@keyframes around {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.credits {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: solid var(--dark) 1px;
  justify-content: space-evenly;
  flex-grow: 1;
  div {
    border-top: solid 1px var(--dark);
  }
  p {
    display: flex;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
  span {
    flex-grow: 1;
  }
}

.mobileimg {
    margin-top: 3vh;
    mix-blend-mode: multiply;
}

// --- mobile --- //

@media screen and (max-width: 1600px) {
  #project-title {
    h1 {
      font-size: 100px;
      line-height: 90px;
    }
  }  
}


@media screen and (max-width: 990px) {
  .top-page-container {
    margin-left: unset;
    margin-right: unset;
  }
  #project-title {
    max-width: unset;
    margin-bottom: 5rem;
    h1 {
      font-size: 70px;
      line-height: 60px;
    }
  }
  #fix {
    right: 1rem;
  }
  .flex-container {
    flex-direction: column;
  }
  .flex-child {
    margin-top: 1rem;
    width: 100%;
  }
  #infobox {
    margin-top: 1rem;
    width: 100%;
  }
}

</style>