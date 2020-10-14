<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata'></projecttop>
            <div class="project">
                <div class="full-size anim">
                    <img src="../assets/images/Bildsprache/Licht-Mensch.jpg" alt="">
                </div>
                <div class="half-half">
                    <div class="l anim">
                        <img src="../assets/images/Bildsprache/Manneslicht.jpg" alt="">
                    </div>
                    <span></span>
                    <div class="r anim">
                        <img src="../assets/images/Bildsprache/Wolke-7.jpg" alt="">
                    </div>
                </div>
                <div class="full-size anim">
                    <img src="../assets/images/Bildsprache/Stone-Man.jpg" alt="">
                </div>
                <div class="vimeo-container">
                    <iframe class="anim" src="https://player.vimeo.com/video/397647989" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        projecttop
    },
    data() {
        return {
            projectdata: {
                name: 'Bildsprache',
                date: '2019',
                counter: '❶',
                colour: '#ea0e0e',
                colour2: '#151515',
                type: 'exhibition',
                desc: 'B20',
                client: 'Biel',
                credits: '-',
                desc1: "Lorem ipsulum",
                desc2: "For this purpose i made 3 posters and a short animation.",
                img2: require('../assets/images/Migros/M02_Tasche.jpg'),
                img3: require('../assets/images/Migros/M01_Tasche.jpg'),
            }
        }
    },
    created () {
        window.scroll(0, 0)
    },
    mounted() {
        gsap.utils.toArray(".anim").forEach(anim => {
            gsap.from(anim, {
                scrollTrigger: {
                    start: "top bottom",
                    end: "top center",
                    markers: true,
                    scrub: 1,
                    trigger: anim
                },
            y: 120,
            opacity: 0.3
            })
        })
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

.half-half {
    margin-top: .1rem;
    margin-bottom: 5rem;
    display: flex;
    span {
        width: .5rem;
    }
}

.l {
    width: 25%;
    padding: 7rem;
    padding-bottom: 12rem;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}

.r {
    margin-top: 10rem;
    width: auto;
    padding: 7rem;
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
    .half {
        padding: 5rem;
    }
}

@media screen and(max-width: 600px) {
    .half-half {
        margin-top: 0;
        flex-direction: column;
    }
    .half {
        margin-top: 0.1rem;
        padding: 4rem;
    }
}
</style>