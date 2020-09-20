<template>
    <div id="citrus" class="grain">
        <div class="container">
            <projecttop></projecttop>
            <div class="project"></div>
        </div>
    </div>
</template>

<script>

import projecttop from '@/components/projecttop.vue'

export default {
    components: {
        projecttop
    }
}
</script>

<style lang="scss" scoped>

#citrus {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-image: url('../assets/images/Back-grain.jpg');
    background-blend-mode: screen;
    background-size: cover;
    background-position: center;
    background-color: #ffcc00;
}

.container {
    margin-top: 4.5vh;
    margin-left: 2vw;
    margin-right: 2vw;
}


.project {
    height: 200vh;
}
</style>
