<template>
    <div id="citrus" class="grain">
        <div class="container">
            <projecttop v-bind:txt = 'txt'></projecttop>
            <div class="project">
                <chapter :chadata = 'chapterone'></chapter>
                <div class="full-img">
                    <img src="../assets/images/Citrus/Yellow-Citrus.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'
import chapter from '@/components/chapter.vue'
// import { TimelineLite} from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js'

export default {
    components: {
        projecttop,
        chapter
    },
    data() {
        return {
            txt: {
                name: 'citrus& packus',
                date: '2000',
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
}
</script>

<style lang="scss" scoped>

#citrus {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-position: center;
    background-color: var(--light);
}

.project {
    width: 100%;
    height: 200vh;
}

.full-img {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
</style>
