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
        name: "Side Table",
        date: "2024",
        counter: "❶",
        type: "Woodwork",
        desc: "Minimalistic side table",
        client: "-",
        credits: "-",
        desc1:
          "Todo",
        desc2:
          "Todo",
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
        ease: "circ.out"
      });
    }
  },
};
</script>
