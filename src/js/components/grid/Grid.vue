<template>
    <article :id="getId" :data-uuid="uuid"></article>
</template>

<script>
import { Grid } from "gridjs";
import { nanoid } from 'nanoid'
import "gridjs/dist/theme/mermaid.css";

export default {
    name: "Grid",
    data() {
        return {
            uuid: nanoid(),
            cols: [],
            rows: []
        }
    },
    computed: {
        getId: function() {
            return `gridjs__${this.uuid}`
        },
    },
    mounted() {
        const grid = new Grid({
            columns: [
                {
                    name: "Name",
                    formatter: (cell) => `Name: ${cell}`
                },
                {
                    name: "Email",
                },
                {
                    name: "Email",
                }
            ],
            data: [
                ['John', 'john@example.com', '(353) 01 222 3333'],
                ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
            ]
        });
        grid.render(document.getElementById(this.getId))
    }
}
</script>

<style scoped>

</style>