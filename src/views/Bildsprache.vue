<template>
  <div id="page" class="grain">
    <div class="projectPageContainer">
      <projectTop
        v-bind:projectdata="projectdata"
        :start-animation="pageLoaded"
      ></projectTop>
      <div class="project">
        <div class="full-size slidein">
          <img src="../assets/images/Bildsprache/Bildsprache-19_Licht-Mensch.jpg" alt="Bildsprache">
        </div>
        <div class="half-half">
          <div class="half">
            <img src="../assets/images/Bildsprache/Bildsprache-19_Spotlight.jpg" alt="Bildsprache"></div>
          <span></span>
          <div class="half">
            <img src="../assets/images/Bildsprache/Bildsprache-19_Wolkenmann.jpg" alt="Bildsprache"></div>
        </div>
        <div class="full-size">
          <img src="../assets/images/Bildsprache/Bildsprache-19_Crystak.jpg" alt="Bildsprache">
        </div>
        <div class="full-size">
          <img src="../assets/images/Bildsprache/Bildsprache-19_Drawing.jpg" alt="Bildsprache">
        </div>
        <div class="full-size">
          <img src="../assets/images/Bildsprache/Bildsprache-19_Japan-Street.jpg" alt="Bildsprache">
        </div>
        <div class="vimeo-container">
          <iframe :src="vim1" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <projectFooter v-if="pageLoaded" />
  </div>
</template>
<script>
import projectTop from "@/components/projectTop.vue";
import projectFooter from "@/components/projectFooter.vue";
import { gsap } from "gsap";

export default {
  name: "Bildsprache",
  components: {
    projectTop,
    projectFooter,
  },
  metaInfo: {
    Meta: [
      { name: "description", content: "A series of animations and stills" },
    ],
  },
  data() {
    return {
      projectdata: {
        name: "Bild sprache",
        date: "2019",
        counter: "❼",
        colour: "#ea0e0e",
        colour2: "#151515",
        type: "Exhibition",
        desc: "A series of animations and stills",
        client: "BILDSPRACHE19",
        credits: "40x40",
        desc1:
          "Eight weeks of total freedom to create. This is what came out of it.",
        desc2:
          "A selection was presented in the Bildsprache19 exhibition.",
      },
      pageLoaded: false,
      vim1: ''
    };
  },
  created() {
    window.scroll(0, 0);
  },
  mounted() {
    gsap.set(".slidein", {
      opacity: 0,
      y: 100,
    });
    this.pageLoaded = true;
    this.gsapin();
  },
  methods: {
    gsapin() {
      var tl = gsap.timeline();
      tl.to(".slidein", {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "circ.out",
        onComplete: this.srcloader()
      });
    },
    srcloader() {
      setTimeout(() => {
          this.vim1 = 'https://player.vimeo.com/video/917228108?'
      }, 2000)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
