<template>
  <div class="movie-container">
    <h1>Movie Details</h1>
    <MovieDetails />
  </div>
</template>

<script>
import MovieDetails from '@/components/MovieDetails.vue'

export default {
  components: {
    MovieDetails
  }
}
</script>

<style scoped lang="scss">
.movie-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
</style>
