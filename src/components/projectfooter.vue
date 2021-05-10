<template>
    <div id="p_footer">
        <div class="back" @click="$router.push(prevproject)" v-bind:style='{"background-color" : (nexthover? "var(--dark)" : "var(--light)" ), "color" : (nexthover? "var(--light" : "var(--dark)")}' @mouseover="nexthover = true" @mouseleave="nexthover = false">
            <p>Previous</p>
        </div>
        <div class="next" @click="$router.push(nextproject)" v-bind:style='{"background-color" : (prevhover? "var(--dark)" : "var(--light)" ), "color" : (prevhover? "var(--light" : "var(--dark)")}' @mouseover="prevhover = true" @mouseleave="prevhover = false">
            <p>next</p>
        </div>
    </div>
</template>

<script>

import projects from '@/projects.json'

export default {
    data() {
        return {
            nexthover: false,
            prevhover: false,
            projects,
            nextproject: {
                required:true,
                type: Boolean
            },
            prevproject: {
                required:true,
                type: Boolean
            }
        }
    },
    name: "projectfooter",
    created() {
        // Find the current Path in the projects list
        let finder = projects.find(Element => Element.name === this.$router.currentRoute.path.replace("/",""))
        // Get the index
        const index = projects.indexOf(finder)
        console.log(index)
        if (index === projects.listlength) {
            this.nextproject = "/" + projects[0].name
            this.prevproject = "/" + projects[index - 1].name
        }
        else if (index === 0) {
            this.nextproject = "/" + projects[index + 1].name
            this.prevproject = "/" + projects[this.projects.listlength].name
        }
        else {
            this.nextproject = "/" + projects[index + 1].name
            this.prevproject = "/" + projects[index - 1].name
        }
    }
}
</script>

<style lang="scss" scoped>

#p_footer {
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    height: 2rem;
    position: absolute;
    display: flex;
    border-top: 1px solid var(--dark);
}

.back {
    border-right: 1px solid var(--dark);
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.next {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and(max-width: 990px) {
    #p_footer {
        height: 3rem;
    }
}

</style>