<template>
    <div id="nav">
      <h3>Florian Schmid</h3>
      <span></span>
      <router-link to="/">Work</router-link>
      <router-link to="/about&contact">About&<br>Contact</router-link>
      <img src="../assets/vectors/Vimeo.svg" @click="vimeotab()">
      <div id="mode"></div>
    </div>
</template>

<script>
    export default {
      name: 'topnav',
      methods: {
        vimeotab: function () {
          window.open("https://vimeo.com/user102848625", "_blank");
        }
      }
    }
</script>

<style lang="scss" scoped>


#nav {
  position: relative;
  margin-top: 4.5vh;
  margin-left: 2vw;
  margin-right: 2vw;
  display: flex;
  align-items: start;
  span {
    flex-grow: 1;
  }
  a {
    margin-left: 3rem;
    font-weight: bold;

    &.router-link-exact-active {
      text-decoration-line: underline;
    }
  }
  img {
    cursor: pointer;
    margin-left: 3rem;
  }
}


</style>