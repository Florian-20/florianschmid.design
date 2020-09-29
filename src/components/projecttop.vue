<template>
  <div id="mainpage">
    <div id="head">
      <div class="type">
        <h3>{{ txt.type }}</h3>
        <h3>{{ txt.date }}</h3>
      </div>
      <div id="fix">
        <router-link v-if="!mobileView" to="/">Work</router-link>
        <router-link v-if="!mobileView" to="/about&contact">About&<br />Contact</router-link>
        <img
          @click="$router.go(-1)"
          src="../assets/vectors/Backwords.svg"
          alt=""
        />
      </div>
    </div>
    <div class="top-page-container">
      <div class="child-left">
        <h2>{{ txt.desc }}</h2>
        <img v-if="mobileView" class="mobileimg" :src="txt.path" alt="" />
        <div id="infobox">
          <div class="flexitem">
            <h2 id="world">{{ txt.counter }}</h2>
          </div>
          <div class="credits">
            <p>client<span />{{ txt.client }}</p>
            <div></div>
            <p>credits<span />{{ txt.credits }}</p>
          </div>
        </div>
      </div>
      <img v-if="!mobileView" class="child-right" :src="txt.path" alt="" />
    </div>
    <h1 v-if="!mobileView">{{ txt.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "projecttop",
  props: ["txt"],
  data() {
    return {
      mobileView: true,
    }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },
  created() {
    this.handleView();
  }
};
</script>

<style lang="scss" scoped>
#mainpage {
  min-height: 100vh;
  h1 {
    position: absolute;
    float: bottom;
    bottom: 1rem;
    left: 0.5rem;
  }
}

#head {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  right: 2vw;
  left: 2vw;
}

.type {
  width: auto;
  max-width: 20vw;
  display: flex;
  h3 {
    margin-right: 2rem;
  }
}

#fix {
  position: fixed;
  display: flex;
  right: 2vw;
  a {
    margin-left: 3rem;
  }
  img {
    margin-left: 3rem;
    cursor: pointer;
  }
}

.top-page-container {
  margin-top: 4vh;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-height: 100%;
}

.child-left {
  width: 40vw;
  display: flex;
  flex-direction: column;
}

.child-right {
  width: auto;
  height: 50vh;
  mix-blend-mode: darken;
  margin-top: 2rem;
  margin-right: 1.5rem;
}

#infobox {
  position: absolute;
  display: flex;
  border: 1px solid var(--dark);
  height: 55px;
  width: 340px;
  bottom: 11rem;
}

.flexitem {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 55px;
}

#world {
  animation: around 4s infinite linear;
}

@keyframes around {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.credits {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: solid var(--dark) 1px;
  justify-content: space-evenly;
  flex-grow: 1;
  div {
    border-top: solid 1px var(--dark);
  }

  p {
    display: flex;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
  span {
    flex-grow: 1;
  }
}

.mobileimg {
    margin-top: 3vh;
    mix-blend-mode: multiply;
}

// --- mobile --- //

@media screen and (max-width: 990px) {
  .top-page-container {
    flex-direction: column;
  }
}

@media screen and (max-width: 600px) {
  #fix {
    right: 1rem;
  }
  #infobox {
    right: 2vw;
    left: 2vw;
    width: auto;
    margin-top: 5vh;
    position: unset;
  }
  .top-page-container {
    margin-top: 1rem;
  }
  .child-left {
    width: 100%;
  }
}
</style>