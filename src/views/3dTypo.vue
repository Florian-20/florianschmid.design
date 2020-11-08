<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata' :start-animation="videoLoaded"></projecttop>
            <div class="project">
                <div class="full-size slidein">
                    <img src="../assets/images/3D&Typo/3dtypo-1.jpg" alt="Poster Neon">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'

import { gsap } from 'gsap'

export default {
    name: '3dtypo',
    components: {
        projecttop
    },
    data() {
        return {
            projectdata: {
                name: '3D&Typo',
                date: '2019',
                counter: '❺',
                type: 'Poster serie',
                desc: 'Photography and graphics combined',
                client: 'SCHOOLPROJECT',
                credits: '-',
                desc1: "A poster creation with 3d typowork and graphics.",
                desc2: "ok",
            },
            videoLoaded: false
        }
    },
    created () {
        window.scroll(0, 0)
    },
    mounted() {
        if(document.readyState === "complete") {
            this.videoLoaded = true;
            var tl = gsap.timeline()
            tl.from('.slidein', {
                duration: 0.8,
                y: 100,
                opacity: 0,
                delay: 1,
                ease: "circ.out",
            })
        }
    }
}
</script>

<style lang="scss" scoped>

#page {
    position: absolute;
    height: auto;
    width: 100%;
    background-position: center;
}

.project {
    margin-top: 7rem;
    margin-left: 7vw;
    margin-right: 7vw;
    height: auto;
    display: flex;
    flex-direction: column;
}

.full-size {
    margin-top: 0.1rem;
    width: 100%;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}


// --- Media --- //

@media screen and (max-width: 990px) {
    .project {
        margin-top: 4rem;
        margin-left: unset;
        margin-right: unset;
    }
}

</style>
