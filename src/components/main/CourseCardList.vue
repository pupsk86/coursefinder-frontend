<script>
import CourseCard from '@/components/main/CourseCard.vue'

export default {
    components: {
        CourseCard
    },
    computed: {
        courses () {
            return this.$store.state.courses
        }
    }
}
</script>

<template>
    <div class="course-card-list">
        <div class="course-card-container" v-for="course in courses" v-bind:key="course.id">
            <course-card
                v-bind:course="course"
            />
        </div>
    </div>
</template>

<style scoped lang="less">
    .course-card-container:not(:last-child) {
      margin-bottom: 15px;
    }
</style>
