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
            src="../assets/images/Bildsprache/Licht-Mensch.jpg"
            alt="Bildsprache"
          />
        </div>
        <div class="half-half">
          <div class="min-image">
            <img
              src="../assets/images/Bildsprache/Manneslicht.jpg"
              alt="Bildsprache Licht"
            />
          </div>
          <span></span>
          <div class="max-image">
            <img
              src="../assets/images/Bildsprache/Wolke-7.jpg"
              alt="Bildsprache Burnout"
            />
          </div>
        </div>
        <div class="full-size">
          <img
            src="../assets/images/Bildsprache/Stone-Man.jpg"
            alt="Bildsprache Crytal"
          />
        </div>
        <div class="vimeo-container">
          <iframe
            :src="vim1"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <div class="vimeo-container">
          <iframe
            :src="vim2"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <div class="full-size-2">
          <img
            src="../assets/images/Bildsprache/Japan-Street.jpg"
            alt="Bildsprache Touche"
          />
        </div>
        <div class="vimeo-container">
          <iframe
            :src="vim3"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
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
  name: "Bildsprache",
  components: {
    projectTop,
    projectFooter,
  },
  metaInfo: {
    Meta: [
      { name: "description", content: "A series of animations and stills" },
    ],
  },
  data() {
    return {
      projectdata: {
        name: "Bild sprache",
        date: "2019",
        counter: "❻",
        colour: "#ea0e0e",
        colour2: "#151515",
        type: "exhibition",
        desc: "A series of animations and stills",
        client: "BILDSPRACHE19",
        credits: "40x40",
        desc1:
          "Eight weeks of total freedom to create. Things like surveillance, isolation and a bit of questioning of existence inspired me during this time.",
        desc2:
          "At the end 5 animations and a ton of images were made. A selection was presented in the Bildsprache19 exhibition.",
      },
      pageLoaded: false,
      vim1: "",
      vim2: "",
      vim3: "",
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
        this.vim1 = "https://player.vimeo.com/video/397647989";
        this.vim2 = "https://player.vimeo.com/video/397648215";
        this.vim3 = "https://player.vimeo.com/video/476784648";
      }, 2000);
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
  iframe {
    margin: 0;
    padding: 0;
  }
}

.full-size {
  margin-top: 0.1rem;
  width: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.full-size-2 {
  margin-top: 12rem;
  width: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.half-half {
  margin-top: 0.1rem;
  margin-bottom: 5rem;
  display: flex;
  span {
    width: 0.5rem;
  }
}

.min-image {
  width: 25%;
  padding: 7rem;
  padding-bottom: 12rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.max-image {
  margin-top: 10rem;
  width: auto;
  padding: 7rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

// --- Media --- //

@media screen and (max-width: 990px) {
  .full-size {
    margin-top: 0.5rem;
  }
  .half-half {
    margin-bottom: 0;
  }
  .min-image {
    margin-top: 0.5rem;
    width: 100%;
    padding: 0;
  }
  .max-image {
    margin-top: 0.5rem;
    padding: 0;
  }
}

@media screen and(max-width: 600px) {
  .half-half {
    margin-top: 0;
    flex-direction: column;
  }
  .half {
    margin-top: 0.1rem;
    padding: 4rem;
  }
}
</style>
