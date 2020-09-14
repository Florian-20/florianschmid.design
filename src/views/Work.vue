<template>
  <div id="work">
    <h2>This is Work page</h2>
    <projectitem/>
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
  width: auto;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
