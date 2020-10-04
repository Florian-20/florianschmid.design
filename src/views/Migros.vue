<template>
    <div id="migros" class="grain scrollto">
        <div class="container">
            <projecttop v-bind:txt = 'txt'></projecttop>
            <div class="project">
                <div class="section-title">
                    <div class="section-child">
                        <div class="chapter">
                            <p>Chapter I</p>
                        </div>
                        <h2>Final printed bag design</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'

export default {
    components: {
        projecttop
    },
    data() {
        return {
            txt: {
                name: 'Migros',
                date: '2017',
                counter: '❷',
                type: 'Bag design& compositing',
                desc: 'Won competiton for Migros new bag design',
                client: 'Migros',
                credits: '-',
                path: require('../assets/vectors/Migros_Black.svg')
                }
        }
    },
}
</script>

<style lang="scss" scoped>

#migros {
    position: absolute;
    height: 20rem;
    width: 100%;
    background-color: var(--light);
    //background-color: #f99007;
}

.project {
    margin-top: 20vh;
    width: 100%;
    height: 200vh;
}

.section-title {
    display: flex;
    width: 100%;
    justify-content: center;
    h2 {
        margin-top: 2rem;
        text-transform: none;
    }
}

.section-child {
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
    h2 {
        text-align: center;
    }
}

.chapter {
    border: 1px solid var(--dark);
    width: auto;
    padding: 1vh;
}
</style>
