<template>
    <div class="page-transition">
    </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
    name: 'loader',
    mounted () {
      this.pTransition()
    },
    methods: {
      pTransition() {
        var tl = gsap.timeline();
        tl.to('.page-transition', {
          duration: 1.5,
          width: "100%",
          left: "0%",
          ease: "Expo.easeInOut"
        })

        tl.to('.page-transition', {
          duration: 1,
          width: "100%",
          left: "100%",
          ease: "Expo.easeInOut",
          delay: 0.3
        })

        tl.set(".page-transition", { left: "-100%" });
      }
    }
}
</script>

<style lang="scss" scoped>

.page-transition {
  z-index: 999;
    position: absolute;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background-color: var(--dark);
    width: 0%;
    height: 100%;
}

</style>