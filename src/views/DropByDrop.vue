<template>
  <div id="page" class="grain">
    <div class="projectPageContainer">
      <projectTop v-bind:projectdata="projectdata" :start-animation="pageLoaded"></projectTop>
      <div class="project">
        <div class="full-size slidein">
          <img
            src="../assets/images/Drop-By-Drop/DROP-BY-DROP_Tree.jpg"
            alt="Drop by Drop"/>
        </div>
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/Drop-By-Drop/DROP-BY-DROP_Hand.jpg">
          </div>
          <div class="half">
              <img src="../assets/images/Drop-By-Drop/DROP-BY-DROP_Tube.jpg">
          </div>
        </div>
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/Drop-By-Drop/DROP-BY-DROP_Zip.jpg">
          </div>
          <div class="half">
              <img src="../assets/images/Drop-By-Drop/DROP-BY-DROP_Full.jpg">
          </div>
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
  components: {
    projectTop,
    projectFooter,
  },
  metaInfo() {
      return{
        title: 'Drop by Drop | Florian Schmid',
        meta: [
          {
            name: 'description',
            content: 'Watering bag for trees'
          }
        ]
      }
    },
  data() {
    return {
      projectdata: {
        name: "Drop by Drop",
        date: "2025",
        counter: "❸",
        type: "Industrial Design",
        desc: "Watering bag",
        client: "-",
        credits: "-",
        desc1:
          "Trees already regularly suffer from periods of drought — and these will become increasingly frequent in the future. Proper irrigation is therefore essential to their survival. The City of Lausanne currently uses watering bags to ensure they stay hydrated.",
        desc2:
          "Drop by Drop is a translucent watering bag designed to raise public awareness about the value of water and the importance of protecting trees in the face of climate change. By releasing water slowly, it allows moisture to reach deep into the roots, where it is most beneficial.",
      },
      pageLoaded: false,
      vim1: "",
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
        onComplete: this.srcloader(),
      });
    },
    srcloader() {
      setTimeout(() => {
        this.vim1 = "https://player.vimeo.com/video/1097124967?";
      }, 500);
    },
  },
};
</script>
