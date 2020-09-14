<template>
    <div class="project_item" @mouseover="hover = true" @mouseleave="hover = false">
        <h3 id="counter">&#10102;</h3>
        <img src="../assets/vectors/Citrus_Black.svg" alt="">
        <div class="project_title">
            <p v-if="!hover">Citrus&packus</p>
            <p v-if="!hover">2018</p>
            <div v-if="hover" class="marquee" style="--tw: 33vw; --ad: 7s;">
                <span>
                    Fictive campagne against the overuse of packages. 
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'projectitem',
        data () {
            return {
                hover: false,
                projects: [
                    {name: 'Citrus-Packus', date: '2018', color: '#EECC2E', info: 'Fictiv campaign against the overuse of packages.'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

$Black: #151515;
$Lightgrey: #F5F5F5;

p {
    text-transform: uppercase;
}

#counter {
    margin-top: 4%;
    margin-left: 4%;
    position: relative;
}

.project_item {
  width: 400px;
  height: 350px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
      height: 70%;
  }
}

.project_item:hover {
    background-color: #EECC2E;
}

.project_title {
    align-self: flex-end;
    width: 100%;
    height: 50px;
    border-top: solid 1px $Black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}

// --- marquee --- 

marquee {
   margin: 2vw 0;
   overflow: hidden;
}


.marquee span {
    display: inline-block;
    white-space: nowrap;
    color: #00112C;
    width: var(--tw);
    text-shadow: var(--tw) 0 currentColor, 
                 calc(var(--tw) * 2) 0 currentColor, 
                 calc(var(--tw) * 3) 0 currentColor,
                 calc(var(--tw) * 4) 0 currentColor;
   
    will-change: transform;
    animation: marquee var(--ad) linear infinite;
}


@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}

</style>