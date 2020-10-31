<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata'></projecttop>
            <div class="project">
                <div class="full-size slidein">
                    <img src="../assets/images/Bildsprache/Licht-Mensch.jpg" alt="">
                </div>
                <div class="half-half">
                    <div class="min-image">
                        <img src="../assets/images/Bildsprache/Manneslicht.jpg" alt="">
                    </div>
                    <span></span>
                    <div class="max-image">
                        <img src="../assets/images/Bildsprache/Wolke-7.jpg" alt="">
                    </div>
                </div>
                <div class="full-size">
                    <img src="../assets/images/Bildsprache/Stone-Man.jpg" alt="">
                </div>
                <!--<div class="vimeo-container">
                    <iframe src="https://player.vimeo.com/video/397647989" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
                </div>-->
                <div class="full-size">
                    <img src="../assets/images/Bildsprache/Japan-Street.jpg" alt="">
                </div>
                <!--<div class="vimeo-container">
                    <iframe src="https://player.vimeo.com/video/397648215" frameborder="0"  allow="fullscreen" allowfullscreen></iframe>
                </div>-->
            </div>
        </div>
    </div>
</template>
<script>

import projecttop from '@/components/projecttop.vue'
import { gsap } from "gsap";

export default {
    name: 'Bildsprache',
    components: {
        projecttop
    },
    data() {
        return {
            projectdata: {
                name: 'Bild sprache',
                date: '2019',
                counter: '❸',
                colour: '#ea0e0e',
                colour2: '#151515',
                type: 'exhibition',
                desc: 'A series of animations and stills',
                client: 'BILDSPRACHE19',
                credits: '-',
                desc1: "8 weeks of total freedom to create. Things like surveillance, isolation and a bit of questioning of existence inspired my during this time.",
                desc2: "At the end 5 animations(digital and analog) and a ton of images were made. A selection was presented in the Bildsprache19 exhibition."
            }
        }
    },
    created () {
        window.scroll(0, 0)
    },
    /*watch: {
        $route: "fetchData"
    },*/
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

.half-half {
    margin-top: .1rem;
    margin-bottom: 5rem;
    display: flex;
    span {
        width: .5rem;
    }
}

.min-image {
    width: 25%;
    padding: 7rem;
    padding-bottom: 12rem;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}

.max-image {
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
    .full-size {
        margin-top: .5rem;
    }
    .half-half {
        margin-bottom: 0;
    }
    .min-image {
        margin-top: .5rem;
        width: 100%;
        padding: 0;
    }
    .max-image {
        margin-top: .5rem;
        padding: 0;
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