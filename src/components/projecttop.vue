<template>
  <div id="mainpage">
    <div id="head">
      <div class="type">
        <h3>{{ txt.date }}</h3>
        <h3>{{ txt.type }}</h3>
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
      <div id="project-title"><h1>{{ txt.name }}</h1></div>
      <div class="flex-container">
        <div class="flex-child">
          <h2>{{ txt.desc }}</h2>
          <div id="infobox">
            <h2 id="world">{{ txt.counter }}</h2>
            <div class="credits">
              <p>CLIENT<span/>{{ txt.client }}</p>
              <div></div>
              <p>CLIENT<span/>{{ txt.credits }}</p>
            </div>
          </div>
        </div>
        <div class="flex-child">
          <p>
            A poster series against the overuse of packages. 
            Est ex nulla proident sunt nostrud qui cillum fugiat 
            esse laboris mollit sit. Velit non cupidatat commodo 
            culpa ex nulla cupidatat in ipsum nostrud laborum. Fugiat 
          </p>
        </div>
        <div class="flex-child">
          <p>
            HA poster series against the overuse of packages. 
            Est ex nulla proident sunt nostrud qui cillum fugiat 
            esse laboris mollit sit. Velit non cupidatat commodo 
          </p>
        </div>
      </div>
    </div>
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
  margin-left: 7vw;
  margin-right: 7vw;
  margin-top: 2.5vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100%;
  align-items: center;
}

#project-title {
  margin-top: 4rem;
  margin-bottom: 7rem;
  max-width: 60%;
  h1 {
    font-size: 100px;
    line-height: 90px;
  }
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.flex-child {
  width: 32%;
  p {
    text-transform: unset;
  }
}

#infobox {
  margin-top: 2rem;
  display: flex;
  border: 1px solid var(--dark);
  height: 55px;
  width: 340px;
  bottom: 11rem;  
  h2 {
    margin-top: .2rem;
    margin-left: .3rem;
    margin-right: .3rem;
  }
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


@media screen and(max-width: 990px) {
  .top-page-container {
    margin-left: unset;
    margin-right: unset;
  }
  #project-title {
    max-width: unset;
    h1 {
      font-size: 70px;
      line-height: 60px;
    }
  }
  .flex-container {
    flex-direction: column;
  }
  .flex-child {
    width: 100%;
  }
  #infobox {
    width: 100%;
  }
}

</style>