<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata'></projecttop>
            <div class="project">
                <div class="full-size slidein">
                    <img src="../assets/images/Edicion/E02_Plakat.jpg" alt="">
                </div>
                <div class="half-half" v-if="loaded">
                    <div class="half">
                        <img src="../assets/images/Edicion/E01_Plakat.jpg" alt="">
                    </div>
                    <span></span>
                    <div class="half">
                        <img src="../assets/images/Edicion/E03_Plakat.jpg" alt="">
                    </div>
                </div>
                <div class="full-size" v-if="loaded">
                    <img src="../assets/images/Edicion/E04_Bag.jpg" alt="">
                </div>
                <div class="website" v-if="loaded">
                    <img src="../assets/images/Edicion/E01_Website.jpg" alt="">
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
                name: 'edicion 19',
                date: '2019',
                counter: '❹',
                type: 'CD',
                desc: 'Identity for a small book forum',
                client: 'EDICION19',
                credits: '-',
                desc1: "Edicion is a small book forum in Biel which supports local alternative writers.",
                desc2: "A corporate identity approach for 2019."
            },
            loaded: false
        }
    },
    methods: {
        loadstate() {
            this.loaded = true
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
                onComplete: this.loadstate()
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
    padding: 7rem;
    background-color: #ea0e0e;
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
    .website {
        padding: 2rem;
    }
}
</style>
