<template>
    <div id="page" class="grain">
        <div class="container">
            <projecttop v-bind:projectdata = 'projectdata'></projecttop>
            <div class="project">
                <div class="full-size anim">
                    <img src="../assets/images/Migros/M03_Tasche.jpg" alt="">
                </div>
                <imagebox v-bind:projectdata = 'projectdata'></imagebox>
                <div class="half-half anim">
                    <div class="half">
                        <img src="../assets/images/Migros/M01_Tasche.jpg" alt="">
                    </div>
                    <span></span>
                    <div class="half">
                        <img src="../assets/images/Migros/M01_Tasche.jpg" alt="">
                    </div>
                </div>
                <div class="full-size anim">
                    <img src="../assets/images/Migros/M01_Tasche.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'
import imagebox from '@/components/image_box.vue'

export default {
    name: 'Migros',
    components: {
        projecttop,
        imagebox
    },
    data() {
        return {
            projectdata: {
                name: 'Migros',
                date: '2019',
                counter: '❶',
                colour: '#ea0e0e',
                colour2: '#151515',
                type: 'won bag design competition',
                desc: 'Won competiton for Migros new bag design',
                client: 'MIGROS',
                credits: '-',
                desc1: "Littering is a huge problem, especially in time of climat change. This project focuses on the overuse of packages in the food industry.",
                desc2: "For this purpose i made 3 posters and a short animation.",
                img2: require('../assets/images/Migros/M02_Tasche.jpg'),
                img3: require('../assets/images/Migros/M01_Tasche.jpg')
            }
        }
    },
    created () {
        window.scroll(0, 0)
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

.full-size {
    margin-top: 0.1rem;
    width: 100%;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}

.half-half {
    margin-top: .1rem;
    display: flex;
    span {
        width: .5rem;
    }
}

.half {
    width: auto;
    padding: 7rem;
    background-color: #ea0e0e;
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
    .half {
        padding: 5rem;
    }
}

@media screen and(max-width: 600px) {
    .half-half {
        margin-top: 0;
        flex-direction: column;
    }
    .half {
        margin-top: 0.1rem;
        padding: 4rem;
    }
}
</style>