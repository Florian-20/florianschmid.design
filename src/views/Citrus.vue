<template>
    <div id="citrus">
        <div class="container">
            <div id="head">
                <div class="type">
                    <h3>
                        CORPORATE IDENTITY&<br>
                        PACKAGE DESIGN
                    </h3>
                    <h3>2018</h3>
                </div>
                <div id="fix">
                    <router-link to="/">Work</router-link>
                    <router-link to="/about&contact">About&<br>Contact</router-link>
                </div>
            </div>
            <div class="top-page-container">
                <div class="child-left">
                    <h2>
                        Fictive campagne<br>
                         against the overuse of packages.
                    </h2>
                    <div id="infobox">
                        <div class="flexitem"><h2>②</h2></div>
                        <div class="credits">
                            <p>Clien Hello World</p>
                            <div></div>
                            <p>Clien Hello World</p>
                        </div>
                    </div>
                </div>
                <img class="child-right" src="../assets/vectors/Citrus_Black.svg" alt="">
            </div>
            <h1>CitrusPackus</h1>
            <div class="project">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

#citrus {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: yellow;
}

.container {
    margin-top: 4.5vh;
    margin-left: 2vw;
    margin-right: 2vw;
    h1 {
        position: absolute;
        float: bottom;
        bottom: 1rem;
        left: .5rem;
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
    width: 30vw;
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
}


.top-page-container {
    margin-top: 4vh;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.child-left {
    display: flex;
    flex-direction: column;
}

.child-right {
    width: 23rem;
    height: 23rem;
    mix-blend-mode: darken;
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
        margin-left: .3rem;
    }
}

.project {
    height: 200vh;
}
</style>
