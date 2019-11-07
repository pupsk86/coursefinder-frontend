<script>
import { mapGetters } from "vuex"
import CourseFavouriteAction from '@/components/main/CourseFavouriteAction.vue'
import CourseRemoveAction from '@/components/compare/CourseRemoveAction.vue'
import { TOGGLE_COURSE_IS_IN_FAVOURITE_LIST, REMOVE_COURSE_FROM_COMPARE_LIST } from '@/store/action-types'

export default {
    components: {
        CourseFavouriteAction,
        CourseRemoveAction
    },
    computed: {
        ...mapGetters({
            comparativeCourses: "getComparativeCourses"
        })
    },
    methods: {
        onCourseFavouriteAction (course) {
            this.$store.dispatch(TOGGLE_COURSE_IS_IN_FAVOURITE_LIST, course)
        },
        onCourseRemoveAction (course) {
            this.$store.dispatch(REMOVE_COURSE_FROM_COMPARE_LIST, course)
        },
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
                <td class="course-compare-table-cell" v-for="course in comparativeCourses" v-bind:key="course.id">
                    <div v-if="courseCompareProp==='title'">
                        <div class="course-site-logo course-site-logo-coursera"/>
                        <div class="course-compare-actions">
                            <course-favourite-action
                                v-bind:active="$store.getters.isCourseFavourite(course)"
                                v-on:click="onCourseFavouriteAction(course)"
                            />
                            <course-remove-action
                                v-on:click="onCourseRemoveAction(course)"
                            />
                        </div>
                    </div>

                    {{ course[courseCompareProp] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped lang="less">
    .course-compare-table {
        width: 100%;
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
    .course-compare-actions {
        float: right;
    }
    .course-site-logo {
        height: 20px;
        width: 90px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: inline-block;
    }
    .course-site-logo-coursera {
        background-image: url(../../assets/images/coursera-logo.svg);
    }
</style>
