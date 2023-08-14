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


const headerProps = computed(() => {
    if (props.header.length === 0) {
        switch (type) {
            case "prop":
                return ["属性", "说明", "类型", "可选值", "默认值"];
            case "slot":
                return ["插槽名", "说明"];
            case "event":
                return ["事件名", "说明", "回调函数"];
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
        background-color: rgb(249, 250, 251);

        th {
          
            text-align: left;
        }
    }
    
    td,
    th {
        white-space: normal;
        padding: .875rem .75rem;
        font-size: .875rem;
        line-height: 1.25rem;
        color: rgb(17, 24, 39);
    }
    th {
        font-weight: 1000;
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
</style>