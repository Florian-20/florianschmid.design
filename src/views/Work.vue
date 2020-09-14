<template>
  <div id="work">
    <router-link to="/Citrus&Packus"><projectitem/></router-link>
  </div>
</template>

<script>

import projectitem from '@/components/project_box.vue'

export default {
  components: {
    projectitem
  }
}
</script>

<style lang="scss">
#work {
  margin-left: 2.5vw;
  margin-right: 2.5vw;
  margin-top: 5vh;
  width: auto;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
