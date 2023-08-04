<template>
    <div id="footer">
        <p>© 2021 Florian Schmid</p>
    </div>
</template>

<script>
    export default {
        name: 'mainFooter'
    }
</script>

<style lang="scss" scoped>

#footer {
    display: flex;
    background-color: var(--dark);
    color: var(--light);
    height: 10rem;
    margin-top: 5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 3rem;
    align-content: center;
}

/*#footerFlexContainer {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: nowrap;
}

.footerChild {
    width: 100%;
    height: 4rem;
    background-color: red;
}*/

</style>