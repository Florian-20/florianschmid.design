<template>
  <div class="grain">
    <topnav></topnav>
    <h1 id="toptitle">Work</h1>
    <div id="work">
      <router-link class="workitems" :to="project.name" v-once v-for="project in projects" v-bind:key="project.name">
        <projectitem v-bind:project="project"></projectitem>
      </router-link>
    </div>
  </div>
</template>

<script>

import projectitem from '@/components/project_box.vue'
import topnav from '@/components/nav.vue'
import projects from '@/projects.json'

export default {
  components: {
    projectitem,
    topnav
  },
  data () {
    return {
      projects
    }
  }
}
</script>

<style lang="scss">

#toptitle {
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 7rem;
  //opacity: 0%;
  overflow-y: hidden;
  height: auto;
  animation: titleanim 1s forwards;
  animation-delay: 1.8s;
  text-overflow: clip;
}

#work {
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-left: 1px  var(--dark) solid;
  border-top: 1px  var(--dark) solid;
  animation: workanim 0.75s 3s forwards;
}

.workitems {
  height: auto;
  flex: 1 1 0px;
  width: auto;
  min-width: 375px;
}

// --- responsiv --- //

@media screen and (max-width: 600px) {
  #toptitle {
    font-size: 100px;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
  .workitems {
    min-width: 300px;
  }
}
</style>
