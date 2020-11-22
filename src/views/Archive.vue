<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata' :start-animation="videoLoaded"></projecttop>
            <div class="project">
                <div id="placeholder"></div>
            </div>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'
import { gsap } from 'gsap'

export default {
    name: 'archive',
    components: {
        projecttop
    },
    data() {
        return {
            projectdata: {
                name: 'Archive',
                date: '2000-2020',
                counter: '❹',
                type: 'ALL',
                desc: 'Archive is under construction',
                client: '-',
                credits: '-',
                desc1: "A fundus of desin stuff will be coming soon",
                desc2: ""
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

#placeholder {
    height: 10vh;
}

// --- Media --- //

</style>
