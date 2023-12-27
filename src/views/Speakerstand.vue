<template>
    <div id="page" class="grain">
        <div class="projectPageContainer">
            <projectTop v-bind:projectdata = 'projectdata' :start-animation="pageLoaded"></projectTop>
            <div class="project slidein">
              <div class="full-size">
                <img src="../assets/images/Speaker/Speakerstand_03.jpg" alt="speaker stand">
              </div>
              <div class="half-half">
                <div class="half">
                  <img src="../assets/images/Speaker/Speakerstand_02.jpg" alt="speaker stand">
                </div>
                <span></span>
                <div class="half">
                  <img src="../assets/images/Speaker/Speakerstand_09.jpg" alt="speaker stand">
                </div>
              </div>
              <div class="half-half">
                <div class="half">
                  <img src="../assets/images/Speaker/Speakerstand_04.jpg" alt="speaker stand">
                </div>
                <span></span>
                <div class="half">
                  <img src="../assets/images/Speaker/Speakerstand_08.jpg" alt="speaker stand">
                </div>
              </div>
              <div class="half-half">
                <div class="half">
                  <img src="../assets/images/Speaker/Speakerstand_07.jpg" alt="speaker stand">
                </div>
                <span></span>
                <div class="half">
                  <img src="../assets/images/Speaker/Speakerstand_06.jpg" alt="speaker stand">
                </div>
              </div>
            </div>
        </div>
        <projectFooter v-if="pageLoaded"/>
    </div>
</template>

<script>
import projectTop from "@/components/projectTop.vue";
import projectFooter from "@/components/projectFooter.vue";
import { gsap } from "gsap";


export default {
  components: {
    projectTop,
    projectFooter
  },
  metaInfo : {
      Meta: [
          { name: 'description', content: 'Walnut speaker stands for Klipsch RP-600m'}
      ]
  },
  data() {
    return {
      projectdata: {
        name: "Speaker Stands",
        date: "2021",
        counter: "❻",
        type: "Woodwork",
        desc: "Walnut speaker stands for Klipsch RP-600m",
        client: "Pers. Project",
        credits: "-",
        desc1: "Lower height speaker stands made with a form factor to fit sideboards.",
        desc2: "",
      },
      pageLoaded: false
    };
  },
  created() {
    window.scroll(0, 0);
  },
  methods: {
    gsapin() {
      var tl = gsap.timeline()
      tl.to('.slidein', {
          duration: 0.8,
          y: 0,
          opacity: 1,
          delay: 1,
          ease: "circ.out"
      })
    }
  },
  mounted() {
    gsap.set('.slidein', {
        opacity: 0,
        y: 100
    })
    this.pageLoaded = true;
    this.gsapin()
  }
};
</script>

<style lang="scss" scoped>
#page {
  position: absolute;
  height: auto;
  width: 100%;
  background-position: center;
}

.full-size {
  margin-top: 0.2rem;
  width: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}


.half-half {
  margin-top: 0.2rem;
  display: flex;
  span {
    width: 1rem;
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
        margin-top: 0.2rem;
    }
}
</style>
