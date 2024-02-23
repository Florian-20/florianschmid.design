<template>
  <div id="page" class="grain">
    <div class="projectPageContainer">
      <projectTop v-bind:projectdata="projectdata" :start-animation="pageLoaded"></projectTop>
      <div class="project">
        <div class="vimeo-container slidein">
          <iframe
            :src="vim1"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <div class="half-half">
          <div class="half">
            <video src="../assets/images/FermedelaFaye/Ferme-delaFaye_Breakdown_3D-Scans.mp4" alt="Horizontal Website" autoplay loop></video>
          </div>
          <span></span>
          <div class="half">
            <video src="../assets/images/FermedelaFaye/Ferme-delaFaye_Breakdown_Scene-1.mp4" alt="Horizontal Website" autoplay loop></video>
          </div>
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
  metaInfo: {
    Meta: [
      { name: "description", content: "An animation for Ferme de la Faye" },
    ],
  },
  data() {
    return {
      projectdata: {
        name: "Panier-Bio",
        date: "2023",
        counter: "❺",
        type: "3D animation",
        desc: "An animation for Ferme de la Faye",
        client: "Ferme de la Faye",
        credits: "-",
        desc1:
          "Ferme de la Faye is a farm located in Fribourg that delivers fresh, regional, and organic food to your home. You can choose from a variety of products, including bread, fruits, vegetables, and others, all produced in the region in a sustainable way.",
        desc2:
          "To introduce new customers to this concept, I created a spot that was shown at the Festival du Film Vert in Fribourg.",
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
        this.vim1 = "https://player.vimeo.com/video/795163876?";
      }, 500);
    },
  },
};
</script>
