<template>
  <div class="movie-details-container">
    <div class="movie-details">
      <div class="movie-poster">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div class="movie-info">
        <h2 class="movie-card-title">{{ movie.Title }}</h2>
        <p class="movie-card-description">{{ movie.Plot }}</p>
        <p class="movie-card-button">Rating: {{ movie.imdbRating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      movie: {}
    }
  },
  async created() {
    const movieId = this.$route.params.movieId || this.$route.query.movieId
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=769c9928&i=${movieId}`)
      this.movie = response.data
    } catch (error) {
      console.error('Error fetching movie details:', error)
    }
  }
}
</script>

<style scoped lang="scss">
.movie-details {
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.movie-details img {
  width: 100%;
  height: fit-content;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.movie-info {
  padding: 16px;
}

.movie-card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.movie-card-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.movie-card-button {
  display: flex;
  padding: 10px;
  justify-content: center;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #555;
  }
}

.movie-poster {
  display: flex;
  justify-content: center;
}
</style>
