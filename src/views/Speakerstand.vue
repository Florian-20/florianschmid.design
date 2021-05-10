<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata' :start-animation="pageLoaded"></projecttop>
            <div class="project slidein">
              <div class="half-half">
                <div class="half">
                  <img src="../assets/images/MatScanner/Scanner_09_1.gif" alt="scanner diy">
                </div>
                <span></span>
                <div class="half">
                  <img src="../assets/images/MatScanner/Scanner_11_1.gif" alt="scanner diy">
                </div>
              </div>
              <div class="half-half">
                <div class="half">
                  <img src="../assets/images/MatScanner/Scanner_07_1.gif" alt="scanner diy">
                </div>
                <span></span>
                <div class="half">
                  <img src="../assets/images/MatScanner/Scanner_08_1.gif" alt="scanner diy">
                </div>
              </div>
              <div class="full-size">
                <img src="../assets/images/MatScanner/Scanner_05.jpg" alt="">
              </div>
              <div class="half-half">
                <div class="half">
                  <img src="../assets/images/MatScanner/Scanner_01.jpg" alt="">
                </div>
                <span></span>
                <div class="half">
                  <img src="../assets/images/MatScanner/Scanner_02.jpg" alt="">
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import projecttop from "@/components/projecttop.vue";
import { gsap } from "gsap";

export default {
  components: {
    projecttop,
  },
  data() {
    return {
      projectdata: {
        name: "Speaker Stands",
        date: "2021",
        counter: "❻",
        type: "Woodwork",
        desc: "Texture scanner for 3d materials",
        client: "ME",
        credits: "-",
        desc1: "A key factor to create realistic materials in 3D is a high quality normal map. A normal map is a texture type used in 3D to represent height and depth of a surface.",
        desc2: "This scanner automates parts of the otherwise manual scanning process, which leads to faster and more precise scan results, who again lead to a more accurate representation of the real world. ",
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
        margin-top: 0.2rem;
    }
    #svg-back {
      svg {
        width: 80%;
      }
    }
}
</style>
