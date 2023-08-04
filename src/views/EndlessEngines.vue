<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata' :start-animation="pageLoaded"></projecttop>
            <div class="project">
                <div class="vimeo-container">
                    <iframe :src="vim1" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <projectfooter v-if="pageLoaded"/>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'
import projectfooter from "@/components/projectfooter.vue";
import { gsap } from 'gsap'

export default {
    components: {
        projecttop,
        projectfooter
    },
    metaInfo : {
        Meta: [
            { name: 'description', content: 'Endless Engines competition entry'}
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

<style lang="scss" scoped>

#page {
    position: absolute;
    height: auto;
    width: 100%;
    background-position: center;
}

.full-size {
    margin-top: 0.1rem;
    width: 100%;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}

.website {
    margin-top: 0.1rem;
    width: auto;
    padding: 4rem;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}

.half-half {
    margin-top: .1rem;
    display: flex;
    span {
        width: .4rem;
    }
}

.half {
    width: auto;
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
}

@media screen and(max-width: 600px) {
    .half-half {
        margin-top: 0;
        flex-direction: column;
    }
    .half {
        margin-top: 0.1rem;
    }
}
</style>
