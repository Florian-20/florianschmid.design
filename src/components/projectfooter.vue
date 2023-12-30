<template>
    <div id="pFooter">
        <div class="footernav">
            <div class="back" @click="$router.push(prevproject)" v-bind:style='{"background-color" : (nexthover? "var(--dark)" : "var(--light)" ), "color" : (nexthover? "var(--light" : "var(--dark)")}' @mouseover="nexthover = true" @mouseleave="nexthover = false">
                <p>Previous</p>
            </div>
            <span></span>
            <div class="next" @click="$router.push(nextproject)" v-bind:style='{"background-color" : (prevhover? "var(--dark)" : "var(--light)" ), "color" : (prevhover? "var(--light" : "var(--dark)")}' @mouseover="prevhover = true" @mouseleave="prevhover = false">
                <p>next</p>
            </div>
        </div>
        <div class="whois"><p>© 2021 Florian Schmid</p></div>
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
    name: "projectFooter",
    created() {
        // Find the current Path in the projects list
        // If name = null causes error. check if null, if pass
        let finder = projects.find(Element => Element.name === this.$router.currentRoute.path.replace("/",""))
        // Get the index
        const index = projects.indexOf(finder)
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

#pFooter {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footernav {
    justify-content: space-around;
    height: 2rem;
    display: flex;
    left: 0;
    right: 0;
    span {
        width: 5vw;
    }
}

.back {
    padding: min(1rem);
    width: 8rem;    
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--dark);
    border-radius: 1rem;
}

.back:hover {
    cursor: pointer;
}

.next {
    padding: min(1rem);
    display: flex;
    width: 8rem;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--dark);
    border-radius: 1rem;
}

.next:hover {
    cursor: pointer;
}

// -- Responsiv --- //

@media screen and (max-width: 600px) {
    .next {
        width: 5rem;
    }
    .back {
        width: 5rem;
    }
}

</style>