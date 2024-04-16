<template>
  <div class="movie-list" v-if="movies.length > 0">
    <router-link v-for="movie in movies" :key="movie.imdbID" :to="'/movie/details/' + movie.imdbID">
      <img :src="movie.Poster" :alt="movie.Title" class="movie-poster" />
    </router-link>
    <!-- <router-link
      v-for="movie in movies"
      :key="movie.imdbID"
      :to="{ path: '/movie/details', query: { movieId: movie.imdbID } }"
    >
      <img :src="movie.Poster" :alt="movie.Title" class="movie-poster" />
    </router-link> -->
  </div>
  <div class="movie-list" v-else>
    <h1>No Movies Available</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      movies: []
    }
  },
  async created() {
    try {
      const response = await axios.get('https://www.omdbapi.com/?apikey=769c9928&s=aquaman')
      if (response.data.Response === 'True') {
        this.movies = response.data.Search
        console.log(this.movies)
      }
    } catch (error) {
      console.error('Error fetching movie details:', error)
    }
  }
}
</script>

<style scoped lang="scss">
.movie-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(33%, 1fr));
  grid-gap: 20px;
  justify-items: center;
}

.movie-poster {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
}

h1 {
  text-align: center;
}

@media (max-width: 768px) {
  .movie-list {
    grid-template-columns: repeat(2, minmax(50%, 1fr));
  }
}

@media (max-width: 480px) {
  .movie-list {
    grid-template-columns: repeat(1, minmax(100%, 1fr));
  }
}
</style>
