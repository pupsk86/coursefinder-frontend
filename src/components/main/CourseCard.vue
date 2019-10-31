<script>
import CourseCompareAction from '@/components/main/CourseCompareAction.vue'
import CourseFavouriteAction from '@/components/main/CourseFavouriteAction.vue'

export default {
    props: {
        course: {
            type: Object,
            required: true
        }
    },
    components: {
        CourseCompareAction,
        CourseFavouriteAction
    },
    methods: {
        toggleCourseIsInFavouriteList () {
            this.$store.dispatch('toggleCourseIsInFavouriteList', this.course)
        },
        toggleCourseIsInCompareList () {
            this.$store.dispatch('toggleCourseIsInCompareList', this.course)
        }
    },
    computed: {
        isCourseFavourite () {
            return this.$store.getters.isCourseFavourite(this.course)
        },
        isCourseComparative () {
            return this.$store.getters.isCourseComparative(this.course)
        }
    },
}
</script>

<template>
    <div class="course-card container-fluid">
        <div class="row">
            <div class="col-xs-8">
                <div class="course-site-logo course-site-logo-coursera"/>
                <div class="course-card-title">
                    {{ course.title }}
                </div>
                <div class="course-card-info">
                    <div class="course-card-info-price">
                        <img class="course-card-info-icon" src="@/assets/images/attach_money-18px.svg"/>
                        {{ course.price }}
                    </div>
                    <div class="course-card-info-level">
                        <img class="course-card-info-icon" src="@/assets/images/insert_chart-18px.svg"/>
                        {{ course.level }}
                    </div>
                    <div class="course-card-info-lang">
                        <img class="course-card-info-icon" src="@/assets/images/language-18px.svg"/>
                        {{ course.lang }}
                    </div>
                </div>
            </div>
            <div class="col-xs-4">
                <div class="course-card-logo-container">
                     <img v-bind:src="course.logo"/>
                </div>
                <div class="course-card-rate">
                    {{ course.rate }}
                </div>
                <div class="course-card-actions">
                    <div class="course-card-action course-card-action-favourite">
                        <course-favourite-action
                            v-bind:active="isCourseFavourite"
                            v-on:click="toggleCourseIsInFavouriteList"
                        />
                    </div>
                    <div class="course-card-action course-card-action-compare">
                        <course-compare-action
                            v-bind:active="isCourseComparative"
                            v-on:click="toggleCourseIsInCompareList"
                        />
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-xs-12">
                {{ course.description }}
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .course-card {
        font-size: 14px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        background-color: #fff;
        text-align: left;
        padding: 15px 10px 15px 10px;
    }
    .course-card-logo-container {
        height: 132px;
        overflow: hidden;
    }
    .course-site-logo {
        height: 20px;
        width: 90px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .course-site-logo-coursera {
        background-image: url(../../assets/images/coursera-logo.svg);
    }
    .course-card-rate {
        float: left;
    }
    .course-card-actions {
        float: right;
    }
    .course-card-action {
        display: inline-block;
    }
    .course-card-title {
        font-size: 20px;
        font-weight: bold;
    }
    .course-card-info-icon {
        vertical-align: middle;
    }
    .course-card-info {
        margin-top: 5px;
    }
</style>