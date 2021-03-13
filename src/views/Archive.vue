<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata' :start-animation="pageLoaded"></projecttop>
            <div class="project">
                <div id="arch-gallery">
                    <img src="../assets/images/Archive/BlackShot.jpg" alt="">
                    <img src="../assets/images/Archive/Blackrock.jpg" alt="">
                    <img src="../assets/images/Archive/Jagtreferendum.jpg" alt="">
                    <img src="../assets/images/Archive/Jagtreferendum.jpg" alt="">
                </div>
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
                counter: '❼',
                type: 'ALL',
                desc: 'Archive is under construction',
                client: '-',
                credits: '-',
                desc1: "A fundus of design stuff will be coming soon",
                desc2: ""
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

#arch-gallery {
    height: auto;
    background-color: grey;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    img {
        width:24.5%;
    }
}

// --- Media --- //

</style>
