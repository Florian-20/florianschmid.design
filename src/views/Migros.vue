<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata' :start-animation="pageLoaded"></projecttop>
            <div class="project">
                <div class="full-size slidein">
                    <img src="../assets/images/Migros/M03_Tasche.jpg" alt="Migros Tasche">
                </div>
                <div class="full-size">
                    <img src="../assets/images/Migros/M01_Tasche.jpg" alt="">
                </div>
                <div class="full-size">
                    <img src="../assets/images/Migros/M02_Tasche.jpg" alt="">
                </div>
                <div class="half-half">
                    <div class="half">
                        <img src="../assets/images/Migros/M04_Close.jpg" alt="Migros Tasche">
                    </div>
                    <span></span>
                    <div class="half">
                        <img src="../assets/images/Migros/M05_Skizze.jpg" alt="Migros Tasche">
                    </div>
                </div>
                <div class="full-size">
                    <img src="../assets/images/Migros/M06_Boats.jpg" alt="Migros Tasche">
                </div>
            </div>
        </div>
        <projectfooter v-if="pageLoaded"/>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'
import projectfooter from '@/components/projectfooter.vue'

import { gsap } from 'gsap'

export default {
    name: 'Migros',
    components: {
        projecttop,
        projectfooter
    },
    data() {
        return {
            projectdata: {
                name: 'Migros',
                date: '2019',
                counter: '❷',
                type: 'won bag design competition',
                desc: 'Won competiton for Migros new bag design',
                client: 'MIGROS',
                credits: '40x44',
                desc1: "Migros is one of the biggest supermarkets in Switzerland and spends 1% of their total icome for different fields of culture.",
                desc2: "Each year Migros gives creative peoples the chance to redesign their bag. This bag was chosen for 2017 and has been printed one million times.",
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
    margin-top: 0.2rem;
    width: 100%;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}

.half-half {
    margin-top: .2rem;
    display: flex;
    span {
        width: .4rem;
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


@media screen and(max-width: 600px) {
    .half-half {
        margin-top: 0;
        flex-direction: column;
    }
    .half {
        margin-top: 0.5rem;
    }
    .topwhite {
        margin-top: 5rem;
    }
}
</style>
