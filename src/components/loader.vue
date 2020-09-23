<template>
    <div id="loader">
        <video src="../assets/general/Moloader.mp4" autoplay="autoplay" loop="loop"></video>
    </div>
</template>

<script>
    export default {
        name: 'loader'
    }
</script>

<style lang="scss" scoped>

#loader {
  animation: onload 0.75s 2s forwards;
  width: 100%;
  height: 100%;
  background-color: var(--dark);
  position: absolute;
  z-index: 9998;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  video {
    width: 20rem;
    filter: invert(100%);
    mix-blend-mode: lighten;
  }
}

@keyframes onload {
  0% { width: 100%;}
  100% { width: 0%;}

}
</style>