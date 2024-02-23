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
            src="../assets/images/Edicion/E02_Plakat.jpg"
            alt="Forum Poster"
          />
        </div>
        <div class="full-size">
          <img src="../assets/images/Edicion/E04_Bag.jpg" alt="Bag design" />
        </div>
        <div class="full-size slidein">
          <img
            src="../assets/images/Edicion/E05_Stickers.jpg"
            alt="Edicion Stickers"
          />
        </div>
        <div class="website">
          <img
            src="../assets/images/Edicion/E06_Stickers.jpg"
            alt="Website design"
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
  name: "edicion",
  components: {
    projectTop,
    projectFooter,
  },
  metaInfo: {
    Meta: [
      { name: "description", content: "Identity for a small book forum " },
    ],
  },
  data() {
    return {
      projectdata: {
        name: "edicion 19",
        date: "2019",
        counter: "❼",
        type: "Corporate Identity",
        desc: "Identity for a small book forum",
        client: "EDICION19",
        credits: "A1",
        desc1:
          "Edicion is a small book forum in Biel which supports local alternative writers. Each year, Edicion makes an exhibiton with a selection of writers presenting their newest books.",
        desc2: "A corporate identity approach for 2019.",
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

<style lang="scss" scoped>

.website {
  margin-top: 0.1rem;
  width: auto;
  padding: 4rem;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

// --- Media --- //

@media screen and(max-width: 600px) {
  .website {
    padding: 2rem;
  }
}
</style>
