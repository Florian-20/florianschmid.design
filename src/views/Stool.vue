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
            src="../assets/images/Roulesk/Roulesk_Full.jpg"
            alt="DAC Raspberry Pi"
          />
        </div>
        <div class="full-size slidein">
          <img
            src="../assets/images/DAC-1/DAC-1_Render_Green_Persp_2.jpg"
            alt="DAC Raspberry Pi"
          />
        </div>
        <div class="full-size slidein">
          <img
            src="../assets/images/DAC-1/DAC-1_Render_Green_Layout.jpg"
            alt="DAC Raspberry Pi"
          />
        </div>
        <div class="vimeo-container">
          <iframe
            :src="vim1"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <div class="full-size slidein">
          <img
            src="../assets/images/DAC-1/DAC-1_Drawings.jpg"
            alt="DAC Raspberry Pi"
          />
        </div>
        <div class="half-half">
          <div class="half">
            <img
              src="../assets/images/DAC-1/Dac-1_01.jpg"
              alt="DAC Raspberry Pi"
            />
          </div>
          <div class="half">
            <img
              src="../assets/images/DAC-1/Dac-1_04.jpg"
              alt="DAC Raspberry Pi"
            />
          </div>
        </div>
        <div class="half-half">
          <div class="half">
            <img
              src="../assets/images/DAC-1/Dac-1_02.jpg"
              alt="DAC Raspberry Pi"
            />
          </div>
          <div class="half">
            <img
              src="../assets/images/DAC-1/Dac-1_03.jpg"
              alt="DAC Raspberry Pi"
            />
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
  metaInfo() {
    return {
      title: "Roulesk | Florian Schmid",
      meta: [
        {
          name: "description",
          content: "Mobile desk for homeoffice",
        },
      ],
    };
  },
  data() {
    return {
      projectdata: {
        name: "Roulesk",
        date: "2023",
        counter: "❼",
        type: "Industrial Design",
        desc: "A mobile desk for homeoffice",
        client: "SCHOOLPROJECT",
        credits: "-",
        desc1:
          "Roulesk is a mobile desk and a response to the rise of remote work. Its wheels and compact shape make it possible to create an agile and adaptable workspace.",
        desc2: "",
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
        this.vim1 = "https://player.vimeo.com/video/909690900";
      }, 2000);
    },
  },
};
</script>
