<template>
  <div id="page" class="grain">
    <div class="projectPageContainer">
      <projectTop
        v-bind:projectdata="projectdata"
        :start-animation="pageLoaded"
      ></projectTop>
      <div class="project">
        <div class="full-size slidein">
          <img
            src="../assets/images/Migros/M03_Tasche.jpg"
            alt="Migros Tasche"
          />
        </div>
        <div class="full-size">
          <img src="../assets/images/Migros/M01_Tasche.jpg" alt="" />
        </div>
        <div class="full-size">
          <img src="../assets/images/Migros/M02_Tasche.jpg" alt="" />
        </div>
        <div class="half-half">
          <div class="half">
            <img
              src="../assets/images/Migros/M04_Close.jpg"
              alt="Migros Tasche"
            />
          </div>
          <span></span>
          <div class="half">
            <img
              src="../assets/images/Migros/M05_Skizze.jpg"
              alt="Migros Tasche"
            />
          </div>
        </div>
        <div class="full-size">
          <img
            src="../assets/images/Migros/M06_Boats.jpg"
            alt="Migros Tasche"
          />
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
  name: "Migros",
  components: {
    projectTop,
    projectFooter,
  },
  metaInfo: {
    Meta: [
      {
        name: "description",
        content: "Won competiton for Migros new bag design",
      },
    ],
  },
  data() {
    return {
      projectdata: {
        name: "Migros",
        date: "2019",
        counter: "❸",
        type: "Concept & design",
        desc: "Won competiton for Migros new bag design",
        client: "MIGROS",
        credits: "40x44",
        desc1:
          "Migros is one of the largest supermarkets in Switzerland and is known for its engagement in various fields of culture and society. This commitment is also reflected in its corporate structure: Migros counts over 2 million cooperative members.",
        desc2:
          "Each year, Migros gives creative people the opportunity to design their bags. The design I created was chosen in 2017 and printed one million times.",
      },
      pageLoaded: false,
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
      });
    },
  },
};
</script>
