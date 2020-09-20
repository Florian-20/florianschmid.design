<template>
  <div class="grain">
    <topnav></topnav>
    <h1 id="toptitle">Work</h1>
    <div id="work">
      <router-link class="workitems" :to="project.name" v-for="project in projects" v-bind:key="project.name">
        <projectitem v-bind:project="project" :mode="mode"></projectitem>
      </router-link>
    </div>
  </div>
</template>

<script>

import projectitem from '@/components/project_box.vue'
import topnav from '@/components/nav.vue'

export default {
  components: {
    projectitem,
    topnav
  },
  data () {
    return {
      mode: 'white',
      projects: [
        {name: 'citrus&packus', date: '2017', color: '#ffcc00', counter: '❶', desc: 'Fictiv campaign against littering', path: require('../assets/vectors/Citrus_Black.svg')},
        {name: 'sunsetfloat', date: '2017', color: '#f99007', counter: '❷', desc: 'Won competition for Migros', path:require( '../assets/vectors/Migros_Black.svg')},
        {name: 'super8', date: '2018', color:  '#CCCCCC', counter: '❸', desc: 'Short film for the photo days in Biel', path: require('../assets/vectors/Super8_Black.svg')},
        {name: 'edicion19', date: '2019', color: '#ea0e0e', counter: '❹', desc: 'Identity for a small book forum', path: require('../assets/vectors/Edicion_Black.svg')},
        {name: '3d&typo', date: '2018', color: '#0930f4', counter: '❹', desc: 'Typework and 3D combination', path: require('../assets/vectors/3D&Typo.svg')},
        {name: 'mat-scanner', date: '2000-2020', color: '#A0A0A0', counter: '❺', desc: 'texture Scanner for 3D materials', path: require('../assets/vectors/MatS_Black.svg')},
        {name: 'archive', date: '2000-2020', color: '#A0A0A0', counter: '❻', desc: 'random stuff which landet here', path: require('../assets/vectors/Archive_Black.svg')}
      ]
    }
  }
}
</script>

<style lang="scss">

#toptitle {
  color: var(--dark);
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 7rem;
  font-size: 120pt;
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
}

.workitems {
  height: auto;
  flex: 1 1 0px;
  width: auto;
  min-width: 375px;
}

</style>
