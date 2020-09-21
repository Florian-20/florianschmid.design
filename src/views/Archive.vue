<template>
    <div id="archive" class="grain">
        <div class="container">
            <projecttop v-bind:txt = 'txt'></projecttop>
            <gallery></gallery>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'
import gallery from '@/components/gallery.vue'

export default {
    components: {
        projecttop,
        gallery
    },
    data() {
        return {
            txt: {
                name: 'archive',
                date: '2000',
                counter: '❶',
                type: 'All type',
                desc: 'A design fundus on a floppydisk',
                client: 'NONE',
                credits: '-',
                path: require('../assets/vectors/Archive_Black.svg')
                }
        }
    },
}
</script>
<style lang="scss" scoped>

#archive {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-image: url('../assets/images/Back-grain.jpg');
    background-blend-mode: screen;
    background-size: cover;
    background-position: center;
    background-color: #e4e4e4;
}

</style>