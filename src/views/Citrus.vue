<template>
    <div id="citrus" class="grain">
        <div class="container">
            <projecttop v-bind:txt = 'txt'></projecttop>
            <div class="project">
                <!--<chapter :chadata = 'chapterone'></chapter>-->
                <div class="full-img">
                    <img src="../assets/images/3D&Typo/Pascard-Neon.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'
//import chapter from '@/components/chapter.vue'
// import { TimelineLite} from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js'

export default {
    components: {
        projecttop,
        //chapter
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
        ScrollTop() {
        window.scrollTo(0,0)
        }
    },
    created () {
        this.ScrollTop()
    }
}
</script>

<style lang="scss" scoped>

#citrus {
    position: absolute;
    height: 25rem;
    width: 100%;
    background-position: center;
    //background-color: #ffcc00;
    background-color: var(--light);
}

.project {
    margin-top: 7rem;
    margin-left: 7vw;
    margin-right: 7vw;
    background-color: var(--light);
    height: 200vh;
    display: flex;
}

.full-img {
    width: 66%;
    img {
        opacity: 100%;
        max-width: 100%;
        max-height: 100%;
    }

}
</style>
