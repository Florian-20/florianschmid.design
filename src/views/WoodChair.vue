<template>
  <div id="page" class="grain">
    <div class="projectPageContainer">
      <projectTop v-bind:projectdata="projectdata" :start-animation="pageLoaded"></projectTop>
      <div class="project">
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_01.jpg" alt="Poster littering">
          </div>
          <span></span>
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_02.jpg" alt="Poster littering">
          </div>
        </div>
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_04.jpg" alt="Poster littering">
          </div>
          <span></span>
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_05.jpg" alt="Poster littering">
          </div>
        </div>
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_09.jpg" alt="Poster littering">
          </div>
          <span></span>
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_11.jpg" alt="Poster littering">
          </div>
        </div>
        <div class="half-half">
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_10.jpg" alt="Poster littering">
          </div>
          <span></span>
          <div class="half">
              <img src="../assets/images/WoodChair/Wood-Chair_13.jpg" alt="Poster littering">
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
      { name: "description", content: "A lounge chair" },
    ],
  },
  data() {
    return {
      projectdata: {
        name: "Wood Chair",
        date: "2024",
        counter: "❶",
        type: "Woodwork",
        desc: "This site is under construction!!",
        client: "-",
        credits: "-",
        desc1:
          "TO DO",
        desc2:
          "TO DO",
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

.website {
  margin-top: 0.1rem;
  width: auto;
  padding: 4rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.half-half {
  margin-top: 0.1rem;
  display: flex;
  flex-direction: row;
  span {
    width: 0.4rem;
  }
}

.half {
  width: 50%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  video {
    max-width: 100%;
    max-height: 100%;
  }
}

// --- Media --- //

@media screen and (max-width: 990px) {
  .project {
    margin-top: 4rem;
    margin-left: unset;
    margin-right: unset;
  }
}

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
