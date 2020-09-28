<template>
    <div id="nav">
      <h3 id="first">Florian Schmid</h3>
      <span></span>
      <router-link to="/" id="second">Work</router-link>
      <router-link to="/about&contact" id="third">About&<br>Contact</router-link>
      <img src="../assets/vectors/Vimeo.svg" id="fourth" @click="vimeotab()">
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
      text-decoration: underline;
    }
  }
  img {
    cursor: pointer;
    margin-left: 3rem;
  }
}

#first{
  margin-top: 2rem;
  opacity: 0%;
  animation: slidein forwards 0.75s;
  animation-delay: 2.6s;
}
#second {
  margin-top: 2rem;
  opacity: 0%;
  animation: slidein forwards 0.75s;
  animation-delay: 2.8s;
}
#third {
  margin-top: 2rem;
  opacity: 0%;
  animation: slidein forwards 0.75s;
  animation-delay: 3s;
}
#fourth {
  margin-top: 2rem;
  opacity: 0%;
  animation: slidein forwards 0.75s;
  animation-delay: 3.2s;
}

@keyframes slidein {
  0% {

    margin-top: 2rem;
    opacity: 0%;
    }
  100% {
    margin-top: 0rem;

    opacity: 100%;
    }
}


</style>