<template>
    <div class="chapter-container">
        <div class="chapter-child">
            <div class="chapter">
                <p>Chapter {{ chadata.no }}</p>
            </div>
            <h2>{{ chadata.chatitle }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'chapter',
        props: ['chadata']
    }
</script>

<style lang="scss" scoped>

.chapter-container {
    margin-top: 10rem;
    margin-bottom: 10rem;
    display: flex;
    width: 100%;
    justify-content: center;
    h2 {
        margin-top: 2rem;
        text-transform: none;
    }
}

.chapter-child {
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
}

.chapter {
    border: 1px solid var(--dark);
    width: auto;
    padding: 1vh;
}

</style>