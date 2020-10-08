<template>
    <div class="box" :style="{'background-color' : projectdata.colour}">
        <div class="large-image">
            <img :src="projectdata.img1">
        </div>
    </div>
</template>

<script>
    export default {
     name: 'posterimage',
     props: ['projectdata']
    }
</script>

<style lang="scss" scoped>

.box {
    margin-top: 0.1rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
}

.large-image {
    width: 33%;
    margin-top: 1rem;
    margin-bottom: 2rem;
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