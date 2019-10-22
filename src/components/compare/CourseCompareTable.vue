<script>
export default {
    computed: {
        courses () {
            return this.$store.state.courses
        }
    },
    data: () => ({
        courseCompareProps: [
            'title',
            'rate',
            'price',
            'level',
            'lang'
        ]
    })
}
</script>

<template>
    <table class="course-compare-table">
        <tbody>
            <tr v-for="courseCompareProp in courseCompareProps" v-bind:key="courseCompareProp">
                <td class="course-compare-table-cell" v-for="course in courses" v-bind:key="course.id">
                    {{ course[courseCompareProp] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped lang="less">
    .course-compare-table {
        font-size: 14px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        background-color: #fff;
        text-align: left;
        padding: 15px 10px 15px 10px;
    }
    .course-compare-table-cell {
        padding: 12px 16px;
        border-top: 1px solid #f3f3f3;
        border-bottom: 1px solid #f3f3f3;
        font-size: 16px;
        vertical-align: top;
    }
</style>
