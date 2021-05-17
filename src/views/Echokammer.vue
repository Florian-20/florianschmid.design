<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata' :start-animation="pageLoaded"></projecttop>
            <div class="project">
                <div class="full-size slidein">
                    <img src="../assets/images/Echokammer/Echokammer_01.jpg" alt="Forum Poster">
                </div>
                <div class="half-half">
                    <div class="half">
                        <img src="../assets/images/Echokammer/Echokammer_02.jpg" alt="">
                    </div>
                    <span></span>
                    <div class="half">
                        <img src="../assets/images/Echokammer/Echokammer_03.jpg" alt="">
                    </div>
                </div>
                <div class="full-size">
                    <video src="../assets/images/Echokammer/Mac-Echo-02.mp4" alt="Horizontal Website" autoplay loop></video>
                </div>
                <div class="half-half">
                    <div class="half">
                        <img src="../assets/images/Echokammer/Echokammer_04.jpg" alt="">
                    </div>
                    <span></span>
                    <div class="half">
                        <img src="../assets/images/Echokammer/Echokammer_05.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <projectfooter v-if="pageLoaded"/>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'
import projectfooter from "@/components/projectfooter.vue";
import { gsap } from 'gsap'

export default {
    name: 'edicion',
    components: {
        projecttop,
        projectfooter
    },
    data() {
        return {
            projectdata: {
                name: 'Die Echokammer',
                date: '2021',
                counter: '❻',
                type: 'CD',
                desc: 'a work about the echo chamber-effect',
                client: 'schoolproject',
                credits: 'F4',
                desc1: "The Echo Chamber effect is an social situation, in which no matter what you say, mean or preferences you have, it will always be reflectet be others in the same social situation. You are constantly under like-minded people.",
                desc2: "There for I created a website which educates and clears up about the echo chambers effects on society."
            },
            pageLoaded: false
        }
    },
    created () {
        window.scroll(0, 0)
    },
    mounted() {
        gsap.set('.slidein', {
            opacity: 0,
            y: 100
        })
        this.pageLoaded = true;
        this.gsapin()
    },
    methods: {
        gsapin() {
            var tl = gsap.timeline()
            tl.to('.slidein', {
                duration: 0.8,
                y: 0,
                opacity: 1,
                delay: 1,
                ease: "circ.out"
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

.full-size {
    margin-top: 0.1rem;
    width: 100%;
    img {
        max-width: 100%;
        max-height: 100%;
    }
    video {
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
    padding: 0rem;
    background-color: #adadad;
    img {
        width: 100%;
        height: 100%;
    }
}

// --- Media --- //

@media screen and (max-width: 990px) {
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
    .website {
        padding: 2rem;
    }
}
</style>
