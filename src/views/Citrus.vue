<template>
    <div id="citrus">
        <topnav></topnav>
        <h1>Citrus</h1>
        <div class="oky"></div>
    </div>
</template>

<script>

import topnav from '@/components/nav.vue'

    export default {
        components: {
            topnav
        }
    }
</script>

<style lang="scss" scoped>

#citrus {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: yellow;
}

.oky {
    height: 200vh;
    width: 100%;
}
</style>