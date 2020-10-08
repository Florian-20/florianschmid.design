<template>
    <div id="flex-box">
        <div class="left-half">
            <div class="left-img">
                <img :src="projectdata.img2" alt="">
            </div>
        </div>
        <div class="right-half">
            <img :src="projectdata.img3" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'imagebox',
        props: ['projectdata']
    }
</script>

<style lang="scss" scoped>

#flex-box {
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 10rem;
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.left-half {
    width: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
}

.left-img {
    width: 50%;
      img {
        max-width: 100%;
        max-height: 100%;
    }
}

.right-half {
    width: 50%;
    img {
        max-width: 100%;
        max-height: 100%;
    }
}

// --- Media --- //

@media screen and (max-width: 990px) {
    #flex-box {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .left-img {
        width: 100%;
    }
}

</style>