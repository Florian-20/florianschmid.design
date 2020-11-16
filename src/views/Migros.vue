<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata' :start-animation="videoLoaded"></projecttop>
            <div class="project">
                <div class="full-size slidein">
                    <img src="../assets/images/Migros/M03_Tasche.jpg" alt="Migros Tasche">
                </div>
                <div id="flex-box">
                    <div class="left-half">
                        <div class="left-img">
                            <img src="../assets/images/Migros/M02_Tasche.jpg" alt="Migros Tasche">
                        </div>
                    </div>
                    <div class="right-half">
                        <img src="../assets/images/Migros/M01_Tasche.jpg" alt="Migros Tasche">
                    </div>
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
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'

import { gsap } from 'gsap'

export default {
    name: 'Migros',
    components: {
        projecttop
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
                credits: '-',
                desc1: "Each year Migros chooeses a class in a creative field to redesign their bag. For 2017 our class has been choosen.",
                desc2: "At the end",
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

.half-half {
    margin-top: .2rem;
    display: flex;
    span {
        width: .3rem;
    }
}

.half {
    width: auto;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}

#flex-box {
    background-color: var(--dark);
    align-items: center;
    margin-top: .1rem;
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.left-half {
    width: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
}

.left-img {
    width: 50%;
      img {
        max-width: 100%;
        max-height: 100%;
    }
}

.right-half {
    width: 50%;
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
    #flex-box {
        background-color: unset;
        margin-top: .5rem;
        flex-direction: column;
    }
    .left-half {
        width: 100%;
    }
    .left-img {
        width: 100%;
    }
    .right-half {
        margin-top: .5rem;
        width: 100%;
    }
}

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
