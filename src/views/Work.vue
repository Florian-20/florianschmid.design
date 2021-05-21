<template>
  <div class="grain">
    <topnav :darkmode="darkmode" :loading="loading"  v-on:switch-mode="$emit('switch-mode')"></topnav>
    <h1 id="toptitle">Work</h1>
    <div id="work">
      <router-link class="workitems" :to="project.name" v-for="project in projects" v-bind:key="project.name">
        <projectitem v-bind:project="project" :darkmode="darkmode"></projectitem>
      </router-link>
    </div>
    <div id="whois">
      <p>© 2021 Florian Schmid</p>
    </div>
  </div>
</template>

<script>

import projectitem from '@/components/project_box.vue'
import topnav from '@/components/nav.vue'
import projects from '@/projects.json'
import { gsap } from 'gsap'




export default {
  components: {
    projectitem,
    topnav
  },
  metaInfo : {
    Meta: [
      { name: 'description', content: '2021 Work Florian Schmid'}
    ]
  },
  props: ['darkmode', 'loading'],
  data () {
    return {
      projects
    }
  },
  methods: {
    onload() {
      var tl = gsap.timeline()
      tl.from('#toptitle', {
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: "circ.out",
      }),
      tl.from('#work', {
        duration: 0.8,
        opacity: 0,
        ease: "circ.out",
        delay: 0.4
      })
    }
  },
  mounted() {
    if (this.loading == true) {
      this.onload()
    }
  }
}
</script>

<style lang="scss">

#toptitle {
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 7rem;
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
