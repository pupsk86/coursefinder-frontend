<template>
    <div class="course-card-list">
        <div class="course-card-container">
            <CourseCard/>
        </div>
        <div class="course-card-container">
            <CourseCard/>
        </div>
        <div class="course-card-container">
            <CourseCard/>
        </div>
        <div class="course-card-container">
            <CourseCard/>
        </div>
    </div>
</template>

<script>
import CourseCard from '@/components/main/CourseCard.vue'

export default {
    components: {
        CourseCard
    }
}
</script>

<style scoped lang="less">
    .course-card-container:not(:last-child) {
      margin-bottom: 15px;
    }
</style>
