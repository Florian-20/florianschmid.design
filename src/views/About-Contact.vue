<template>
  <div id="about">
    <topnav></topnav>
    <div>
      <h2>
        Hi, my name is Florian. 
        I am a Graphic Designer and front end Web developer based in Switzerland. 
        I am currently in my final graphic design training year at B:B. 
        I like to use my variety of skills to develop outstanding and long term Designs and Websites who function technically and visually.
      </h2>
    </div>
  </div>
</template>

<script>

import topnav from '@/components/nav.vue'

export default {
  components: {
    topnav
  }
}
</script>

<style lang="scss" scoped>

#about {
    position: absolute;
    height: 100%;
    width: 100%;
    background-position: center;
}

</style>