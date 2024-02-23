<template>
    <div id="page" class="grain">
        <div class="projectPageContainer">
            <projectTop v-bind:projectdata='projectdata' :start-animation="pageLoaded"></projectTop>
            <div class="project">
                <div class="vimeo-container">
                    <iframe :src="vim1" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
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
            { name: 'description', content: 'Endless Engines competition entry' }
        ]
    },
    data() {
        return {
            projectdata: {
                name: 'Endless-Engines',
                date: '2023',
                counter: '❶',
                type: '3D animation',
                desc: 'An animation for Ferme de la Faye',
                client: 'Contest',
                credits: '-',
                desc1: "Entry video for the Endless Engines challange. The animation has been done in Blender, compositing and colorgrading in Davici Resolve.",
                desc2: ""
            },
            pageLoaded: false,
            vim1: ''
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
                this.vim1 = 'https://player.vimeo.com/video/848832287?'
            }, 500)
        }
    }
}
</script>
