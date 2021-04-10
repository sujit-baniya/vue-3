<template>
    <div>
        <h1>Hello World!!!</h1>
        <grid
            :cols="cols"
            server-url="https://swapi.dev/api/films/"
            :server-method="handleResponse"
        />
    </div>
</template>

<script>
import Grid from "./grid/Grid";
export default {
    name: "App",
    components: {Grid},
    data() {
        return {
            cols: ['Title', 'Director', 'Producer']
        }
    },
    methods: {
        handleResponse(data) {
            return data.results.map(movie =>
                [movie.title, movie.director, movie.producer]
            )
        }
    }
}
</script>

<style scoped>

</style>