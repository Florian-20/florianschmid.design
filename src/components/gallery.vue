<template>
  <div class="gallery">
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
      <img :src="thumbUrl(photo.filename)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery'
}
</script>

<style lang="scss" scoped>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }  .gallery-panel img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }
</style>