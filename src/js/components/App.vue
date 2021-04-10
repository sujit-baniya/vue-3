<template>
    <div>
        <h1>Hello World!!!</h1>
        <grid
            :cols="cols"
            server-url="https://swapi.dev/api/films/"
            :server-method="handleResponse"
            :search="search"
            :pagination="pagination"
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
            cols: [
                {
                    name: "Title",
                    formatter: (cell) => {
                        return `Title ${cell}`
                    }
                },
                {
                    name: "Director"
                },
                {
                    name: "Producer"
                }
            ]
        }
    },
    methods: {
        handleResponse(data) {
            return data.results.map(movie =>
                [movie.title, movie.director, movie.producer]
            )
        },
        search(prev, keyword) {
            return `${prev}?search=${keyword}`
        },
        pagination(prev, page, limit) {
            return `${prev}?limit=${limit}&offset=${page * limit}`
        }
    }
}
</script>

<style scoped>

</style>