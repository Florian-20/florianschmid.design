<template>
  <div id="page" class="grain">
    <div class="projectPageContainer">
      <projectTop v-bind:projectdata="projectdata" :start-animation="pageLoaded"></projectTop>
      <div class="project">
        <div class="half-half slidein">
          <div class="half">
            <img src="../assets/images/Ranger/Hi-Lo-Fi_Ranger_1.jpg" alt="Chair">
          </div>
          <div class="half">
            <img src="../assets/images/Ranger/Hi-Lo-Fi_Ranger_2.jpg" alt="Chair">
          </div>
        </div>
        <div class="full-size">
          <img src="../assets/images/Ranger/Hi-Lo-Fi_Ranger_Assembly.jpg" alt="Rager Speaker" />
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
      title: 'Bluetooth Speaker | Florian Schmid',
      meta: [
        {
          name: 'description',
          content: 'Outdoor bluetooth speaker'
        }
      ]
    } 
  },
  data() {
    return {
      projectdata: {
        name: "Ranger",
        date: "2024",
        counter: "❷",
        type: "Industrial Design",
        desc: "Outdoor bluetooth speaker",
        client: "-",
        credits: "-",
        desc1:
          "Inspired by an iconic military flashlight, this speaker reimagines the rugged object by integrating modern features designed for camping. Its stamped sheet metal casing, with a water-resistant construction, makes it the ideal companion for outdoor adventures.",
        desc2:
          "Thanks to its easy-to-open design, it provides quick access to internal components, simplifying replacement and extending its durability.",
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
