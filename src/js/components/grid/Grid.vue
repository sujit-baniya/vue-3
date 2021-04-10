<template>
    <article :id="getId" :data-uuid="uuid"></article>
</template>

<script>
import { Grid } from "gridjs";
import { nanoid } from 'nanoid'
import "gridjs/dist/theme/mermaid.css";

export default {
    name: "Grid",
    props: {
        cols: {type: Array},
        rows: {type: Array},
        serverUrl: {type: String},
        serverMethod: { type: Function },
        search: { type: Function },
        pagination: { type: Function },
        limit: {type: Number},
    },
    data() {
        return {
            uuid: nanoid(),
        }
    },
    computed: {
        getId: function() {
            return `gridjs__${this.uuid}`
        },
    },
    mounted() {
        const grid = new Grid();
        let config = {
            pagination: {
                enabled: true,
                limit: this.limit,
                server: {
                    url: this.pagination
                }
            },
            columns: this.cols,
            search: {
                server: {
                    url: this.search
                }
            },
        }
        if (this.serverUrl) {
            config = {
                ...config,
                server: {
                    url: this.serverUrl,
                    then: this.serverMethod
                }
            }
        } else {
            config = {
                ...config,
                data: this.rows
            }
        }
        grid.updateConfig(config).render(document.getElementById(this.getId))
    },
}
</script>

<style scoped>

</style>