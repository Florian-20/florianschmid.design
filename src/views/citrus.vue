<template>
    <div id="page" class="grain">
        <div class="projectPageContainer">
            <projectTop v-bind:projectdata='projectdata' :start-animation="pageLoaded"></projectTop>
            <div class="project">
                <div class="full-size slidein">
                    <img src="../assets/images/Citrus/Yellow-Citrus.jpg" alt="Poster littering">
                </div>
                <div class="half-half">
                    <div class="half">
                        <img src="../assets/images/Citrus/Violett-Patato.jpg" alt="Poster littering">
                    </div>
                    <span></span>
                    <div class="half">
                        <img src="../assets/images/Citrus/Grey-Banana.jpg" alt="Poster littering">
                    </div>
                </div>
                <div class="vimeo-container">
                    <iframe :src="vim1" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
                </div>
                <div class="vimeo-container">
                    <iframe :src="vim2" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
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
    components: {
        projectTop,
        projectFooter
    },
    metaInfo: {
        Meta: [
            { name: 'description', content: 'A campaign against the overuse of packagin' }
        ]
    },
    data() {
        return {
            projectdata: {
                name: 'Citrus Packus',
                date: '2017',
                counter: '❷',
                type: 'posters & animation',
                desc: 'A campaign against the overuse of packaging',
                client: 'SCHOOLPROJECT',
                credits: 'A0',
                desc1: "Littering is a huge problem and has grown over the past years. The goal was to show the tremendous amount of packaging used today by overusing space and material.",
                desc2: "A series of 3 posters were made and an additional 3D Animation."
            },
            pageLoaded: false,
            vim1: '',
            vim2: ''
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
                ease: "circ.out",
                onComplete: this.srcloader()
            })
        },
        srcloader() {
            setTimeout(() => {
                this.vim1 = 'https://player.vimeo.com/video/361662647'
                this.vim2 = 'https://player.vimeo.com/video/482303610'
            }, 2000)
        }
    }
}
</script>
