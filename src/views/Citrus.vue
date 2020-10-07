<template>
    <div id="citrus" class="grain scrollto">
        <div class="container">
            <projecttop v-bind:txt = 'txt'></projecttop>
            <div class="project">
                <div class="One-img">
                    <img src="../assets/images/Citrus/Yellow-Citrus.jpg" alt="">
                </div>
                <div class="flex-box">
                    <div class="Two-img">
                        <img src="../assets/images/Citrus/Grey-Banana.jpg" alt="">
                    </div>
                    <div class="Three-img">
                        <img src="../assets/images/Citrus/Violett-Patato.jpg" alt="">
                    </div>
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
            txt: {
                name: 'citrus& packus',
                date: '2017',
                counter: '❶',
                type: 'poster& Animation',
                desc: 'A campaign against the overuse of packages',
                client: 'NONE',
                credits: '-',
                path: require('../assets/vectors/Citrus_Black.svg')
            },
            chapterone: {
                no: 'I',
                chatitle: 'The final poster series'
            }

        }
    },
    methods: {
        onscroll() {
            const images = ['.One-img', '.Two-img', '.Three-img']
            for (const img of images) {
                gsap.from(img, {
                    scrollTrigger: img,
                    opacity: 0,
                    y: 100,
                    delay: 0.2,
                    duration: 1,
                })
            }
        }
    },
    created () {
        window.scroll(0, 0)
    },
    mounted() {
        this.onscroll()
    }
}
</script>

<style lang="scss" scoped>

#citrus {
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

.flex-box {
    align-items: center;
    margin-top: 10rem;
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.One-img {
    width: 66%;
    img {
        opacity: 100%;
        max-width: 100%;
        max-height: 100%;
    }
}

.Two-img {
    width: 33%;
    img {
        opacity: 100%;
        max-width: 100%;
        max-height: 100%;
    }
}

.Three-img {
    margin-left: 11rem;
    width: 66%;
    img {
        opacity: 100%;
        max-width: 100%;
        max-height: 100%;
    }
}

</style>
