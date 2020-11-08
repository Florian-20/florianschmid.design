<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata' :start-animation="videoLoaded"></projecttop>
            <div class="project">
                <div class="full-size slidein">
                    <img src="../assets/images/Citrus/Yellow-Citrus.jpg" alt="">
                </div>
                <div class="half-half">
                    <div class="half">
                        <img src="../assets/images/Citrus/Violett-Patato.jpg" alt="">
                    </div>
                    <span></span>
                    <div class="half">
                        <img src="../assets/images/Citrus/Grey-Banana.jpg" alt="">
                    </div>
                </div>
                <div class="vimeo-container">
                    <iframe src="https://player.vimeo.com/video/361662647" @load="videoLoaded = true" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'
import { gsap } from 'gsap'

export default {
    components: {
        projecttop
    },
    data() {
        return {
            projectdata: {
                name: 'Citrus Packus',
                date: '2017',
                counter: '❶',
                type: 'poster campaign& animation',
                desc: 'A campaign against the overuse of packaging',
                client: 'SCHOOLPROJECT',
                credits: '-',
                desc1: "This series of posters and an additional animation focuses in terms of littering, on the overuse of packaging.",
                desc2: "A corporate identity approach for 2019."
            },
            videoLoaded: false
        }
    },
    created () {
        window.scroll(0, 0)
    },
    mounted() {
        if(document.readyState === "complete") {
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

.website {
    margin-top: 0.1rem;
    width: auto;
    padding: 4rem;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}
.half-half {
    margin-top: .1rem;
    display: flex;
    span {
        width: .5rem;
    }
}

.half {
    width: auto;
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

@media screen and(max-width: 600px) {
    .half-half {
        margin-top: 0;
        flex-direction: column;
    }
    .half {
        margin-top: 0.1rem;
    }
    .website {
        padding: 2rem;
    }
}
</style>
