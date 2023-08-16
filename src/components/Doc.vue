<template>
    <h2>{{ title }}</h2>
    <table>
        <thead>
            <tr>
                <th v-for="(item, index) in headerProps" :key="index">{{ item }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(itemx, index) in body" :key="index">
                <td v-for="(itemy, indey) in itemx" :key="indey">

                    {{ itemy }}</td>
            </tr>
        </tbody>
    </table>
</template>


<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
    title: {
        type: String,
    },
    type: {
        type: String,
        default: 'prop',
    },
    body: {
        type: Array,
        default: () => []
    },
    header: {
        type: Array,
        default: () => [],
    },
});

const { type } = props
console.log(props.body,'props')

const headerProps = computed(() => {
    if (props.header.length === 0) {
        switch (type) {
            case "prop":
            return ["Name", "Description", "Type", "Optional", "Default"];
            case "slot":
                return ["Name", "Description"];
            case "event":
                return ["Name", "Description", "Callback"];
        }
    }
    return props.header;
});

</script>



<style lang="scss">
table {
    width: 100%;
    margin: 30px 0;
    background-color: #fff;
    border-radius: 0.325rem;
    border-collapse: collapse;

    thead {
        background-color: rgba(249,250,251,0.9);

        th {
          
            text-align: left;
        }
    }
    
    td,
    th {
        white-space: normal;
        padding: .875rem .75rem;
       
        line-height: 1.25rem;
        color: rgb(17, 24, 39);
    }
    th {
        font-weight: 600;
        font-size: 1.025rem;
    }
    tbody {
        tr {
            border: 1px solid rgba(229, 231, 235, 0.5);

            td {

                &:first-child {
                    color: #6366F1;
                    /* 设置第一个 td 的字体颜色 */
                }

                white-space: nowrap;
                text-align: left;
                color: rgb(107, 114, 128);
            }

        }
    }
}


@media (max-width: 1140px) {
    // table thead th:nth-child(2),
    table thead th:nth-child(4),
    // table tbody td:nth-child(2),
    table tbody td:nth-child(4) {
        display: none;
    }
}
@media (max-width: 780px) {
    table thead th:nth-child(2),
    table thead th:nth-child(4),
    table tbody td:nth-child(2),
    table tbody td:nth-child(4) {
        display: none;
    }
}
</style>