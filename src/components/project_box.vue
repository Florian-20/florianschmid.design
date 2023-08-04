<template>
    <div class="project_item" v-bind:style='{"background-color" : (hover? project.colour : "var(--light)" )}' @mouseover="hover = true" @mouseleave="hover = false">
        <h3 id="counter">{{ project.counter }}</h3>
        <img v-if="!darkmode" id="mode-light" :src="filesrc">
        <img v-if="darkmode" id="mode-dark" :src="filesrc">
        <div class="project_title">
            <p v-if="!hover">{{ project.name }}</p>
            <p v-if="!hover">{{ project.date }}</p>
            <div v-if="hover" class="marquee" style="--tw: 22rem; --ad: 7s;">
                <span>
                    {{ project.mindesc }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'projectitem',
        props: ['project', 'darkmode'],
        data () {
            return {
                hover: false,
                filesrc: require("../assets/vectors/" + this.project.filename)
            }
        }
    }
</script>

<style lang="scss" scoped>

    p {
        text-transform: uppercase;
    }

    #counter {
        margin-top: 1rem;
        margin-left: 1rem;
        position: absolute;
    }

    .project_item {
        color: var(--dark);
        height: 350px;
        border: 1px solid var(--dark);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: .5rem;
        margin: .5rem;
        img {
            position: relative;
            height: 70%;
            align-self: center;
            margin-top: 30px;
        }
    }

    #mode-dark {
        mix-blend-mode: unset;
    }

    #mode-light {
        mix-blend-mode: multiply;
    }

    .project_title {
        width: 100%;
        height: 50px;
        border-top: solid 1px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        p {
            margin-left: 1vw;
            margin-right: 1vw;
        }
    }

    // --- marquee --- 

    .marquee span {
        display: inline-block;
        white-space: nowrap;
        width: var(--tw);
        text-shadow: var(--tw) 0 currentColor, 
                    calc(var(--tw) * 2) 0 currentColor, 
                    calc(var(--tw) * 3) 0 currentColor,
                    calc(var(--tw) * 4) 0 currentColor;
    
        will-change: transform;
        animation: marquee var(--ad) linear infinite;
    }


    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
    }


    @media screen and (max-width: 600px) {
        .project_title {
            p {
                margin-left: 3vw;
                margin-right: 3vw;
            }
        }
    }
</style>