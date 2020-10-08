<template>
    <div class="large-image">
        <img :src="projectdata.img1">
    </div>
</template>

<script>
    export default {
     name: 'goldimage',
     props: ['projectdata']
    }
</script>

<style lang="scss" scoped>

.large-image {
    width: 66%;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}

// --- Media --- //

@media screen and (max-width: 990px) {
    .large-image {
        width: 100%;
    }
}

</style>