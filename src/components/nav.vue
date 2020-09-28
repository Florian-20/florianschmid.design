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
        },
        OnceLoad: function() {
          var exec = false;
          return function() {
            if (!exec) {
              // Add animation class
              exec = true;
            }
          }
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
  align-items: flex-start;
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
  animation-delay: 0.6s;
}
#second {
  animation-delay: 0.8s;
}
#third {
  animation-delay: 1s;
}
#fourth {
  animation-delay: 1.2s;
}

.navanim {
  margin-top: 2rem;
  opacity: 0%;
  animation: slidein forwards 0.75s;
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