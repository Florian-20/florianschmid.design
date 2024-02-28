<template>
  <div id="page" class="grain">
    <div class="projectPageContainer">
      <projectTop v-bind:projectdata="projectdata" :start-animation="pageLoaded"></projectTop>
      <div class="project">
        <div class="half-half slidein">
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_blue_02.jpg" alt="Chair">
          </div>
          <span></span>
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_blue_01.jpg" alt="Chair">
          </div>
        </div>
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_yellow_01.jpg" alt="Chair">
          </div>
          <span></span>
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_yellow_02.jpg" alt="Chair">
          </div>
        </div>
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_01.jpg" alt="Chair">
          </div>
          <span></span>
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_02.jpg" alt="Chair">
          </div>
        </div>
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_04.jpg" alt="Chair">
          </div>
          <span></span>
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_05.jpg" alt="Chair">
          </div>
        </div>
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_09.jpg" alt="Chair">
          </div>
          <span></span>
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_11.jpg" alt="Chair">
          </div>
        </div>
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_10.jpg" alt="Chair">
          </div>
          <span></span>
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_13.jpg" alt="Chair">
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
      { name: "description", content: "Wood chair" },
    ],
  },
  data() {
    return {
      projectdata: {
        name: "Idun Chair",
        date: "2024",
        counter: "❶",
        type: "Woodwork",
        desc: "Elegant wood chair",
        client: "-",
        credits: "-",
        desc1:
          "Idun Chair is a classic harmonious wood chair with a modern touch. Its core is built with white maple wood which works well for steam bending.",
        desc2:
          "The colorful cushions give the chair a certain playfulness, without loosing its elegance.",
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
