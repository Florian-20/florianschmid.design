<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata'></projecttop>
            <div class="project">
                <goldimage v-bind:projectdata = 'projectdata' ></goldimage>
                <imagebox v-bind:projectdata = 'projectdata'></imagebox>
            </div>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'
import imagebox from '@/components/image_box.vue'
import goldimage from '@/components/gold_image.vue'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        projecttop,
        imagebox,
        goldimage
    },
    data() {
        return {
            projectdata: {
                name: 'edicion19',
                date: '2019',
                counter: '❶',
                type: 'poster& Animation',
                desc: 'A campaign against the overuse of packages',
                client: 'NONE',
                credits: '-',
                desc1: "Littering is a huge problem, especially in time of climat change. This project focuses on the overuse of packages in the food industry.",
                desc2: "For this purpose i made 3 posters and a short animation.",
                img1: require('../assets/images/Edicion/E01_Plakat.jpg'),
                img2: require('../assets/images/Citrus/Grey-Banana.jpg'),
                img3: require('../assets/images/Citrus/Violett-Patato.jpg')
            }
        }
    },
    methods: {
        onscroll() {
            const images = ['.large-image', '.left-img', '.right-half']
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

// --- Media --- //

@media screen and (max-width: 990px) {
    .project {
        margin-top: 4rem;
        margin-left: unset;
        margin-right: unset;
    }
}
</style>
