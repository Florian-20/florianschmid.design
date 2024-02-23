<template>
    <div id="page" class="grain">
        <div class="projectPageContainer">
            <projectTop v-bind:projectdata='projectdata' :start-animation="pageLoaded"></projectTop>
            <div class="project">
                <div class="full-size slidein">
                    <img src="../assets/images/DAC-1/DAC-1_Render_Green_Persp_3.jpg" alt="DAC Raspberry Pi">
                </div>
                <div class="full-size slidein">
                    <img src="../assets/images/DAC-1/DAC-1_Render_Green_Persp_2.jpg" alt="DAC Raspberry Pi">
                </div>
                <div class="full-size slidein">
                    <img src="../assets/images/DAC-1/DAC-1_Render_Green_Layout.jpg" alt="DAC Raspberry Pi">
                </div>
                <div class="vimeo-container">
                    <iframe :src="vim1" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
                </div>
                <div class="full-size slidein">
                    <img src="../assets/images/DAC-1/DAC-1_Drawings.jpg" alt="DAC Raspberry Pi">
                </div>
                <div class="half-half">
                    <div class="half">
                        <img src="../assets/images/DAC-1/Dac-1_01.jpg" alt="DAC Raspberry Pi">
                    </div>
                    <span></span>
                    <div class="half">
                        <img src="../assets/images/DAC-1/Dac-1_04.jpg" alt="DAC Raspberry Pi">
                    </div>
                </div>
                <div class="half-half">
                    <div class="half">
                        <img src="../assets/images/DAC-1/Dac-1_02.jpg" alt="DAC Raspberry Pi">
                    </div>
                    <span></span>
                    <div class="half">
                        <img src="../assets/images/DAC-1/Dac-1_03.jpg" alt="DAC Raspberry Pi">
                    </div>
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
                name: 'DAC-1',
                date: '2024',
                counter: '❷',
                type: 'product design',
                desc: 'A minimalistic and functional case',
                client: 'SCHOOLPROJECT',
                credits: 'A0',
                desc1: "DAC-1 is a small case for the Raspberry Pi combined with a DAC board. It is designed to be 3D printed and assembled at home. ",
                desc2: ""
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
                this.vim1 = 'https://player.vimeo.com/video/909690900'
            }, 2000)
        }
    }
}
</script>
