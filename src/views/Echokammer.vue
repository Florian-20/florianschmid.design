<template>
    <div id="page" class="grain">
        <div class="projectPageContainer">
            <projectTop v-bind:projectdata='projectdata' :start-animation="pageLoaded"></projectTop>
            <div class="project">
                <div class="half-half slidein">
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
        <projectFooter v-if="pageLoaded" />
    </div>
</template>

<script>

import projectTop from '@/components/projectTop.vue'
import projectFooter from "@/components/projectFooter.vue";
import { gsap } from 'gsap'

export default {
    name: 'edicion',
    components: {
        projectTop,
        projectFooter
    },
    data() {
        return {
            projectdata: {
                name: 'Die Echokammer',
                date: '2021',
                counter: '❾',
                type: 'CD',
                desc: 'a work about the echo chamber-effect',
                client: 'schoolproject',
                credits: 'F4',
                desc1: "The so-called 'Echo Chamber Effect' is a social situation in which your opinions and preferences will always be reflected and reinforced by others. You are surrounded by like-minded people, and you get little to no alternative opinions and perspectives on a subject. As a consequence, this phenomenon can lead to a biased picture of the world and sometimes extreme opinions, resulting in social and political polarization.",
                desc2: "The Echo Chamber Effect is subtle and it is important to create awareness for this effect to prevent its extreme forms. Therefore I created a website which explains the effect in an understandable and visually appealing way. Starting from the origins of the term 'Echo Chamber', which has its roots in music, and ending with the consequences on society and the individual."
            },
            pageLoaded: false
        }
    },
    created() {
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
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
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
}</style>
