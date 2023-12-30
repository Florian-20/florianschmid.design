<template>
  <div id="page" class="grain">
    <div class="projectPageContainer">
      <projectTop
        v-bind:projectdata="projectdata"
        :start-animation="pageLoaded"
      ></projectTop>
      <div class="project">
        <div class="full-size slidein">
          <img src="../assets/images/3D&Typo/3dtypo-1.jpg" alt="Poster Neon" />
        </div>
        <div class="half-half">
          <div class="half">
            <img src="../assets/images/3D&Typo/3dtypo-2.jpg" alt="" />
          </div>
          <span></span>
          <div class="half">
            <img src="../assets/images/3D&Typo/3dtypo-3.jpg" alt="" />
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
  name: "3dtypo",
  components: {
    projectTop,
    projectFooter,
  },
  metaInfo: {
    Meta: [{ name: "description", content: "Liquids poster" }],
  },
  data() {
    return {
      projectdata: {
        name: "3D&Typo",
        date: "2019",
        counter: "❺",
        type: "Posters",
        desc: "Expermenting with liquids and typo",
        client: "SCHOOLPROJECT",
        credits: "A0",
        desc1:
          "Posters created from photos taken of plexiglass cutouts and liquid colors.",
        desc2: "",
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
#page {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: absolute;
  height: auto;
  width: 100%;
  background-position: center;
}

.full-size {
  margin-top: 0.1rem;
  width: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.half-half {
  margin-top: 0.1rem;
  display: flex;
  span {
    width: 0.4rem;
  }
}

.half {
  width: auto;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

// --- Media --- //

@media screen and(max-width: 600px) {
  .half-half {
    margin-top: 0;
    flex-direction: column;
  }
  .half {
    margin-top: 0.1rem;
  }
}
</style>
