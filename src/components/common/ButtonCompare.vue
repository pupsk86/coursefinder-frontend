<script>
export default {
    props: {
        totalCount: {
            type: Number,
            required: true
        }
    }
}
</script>

<template>
    <div class="btn-compare-container">
        <router-link to="/compare" class="btn-compare-link">
            <img data-v-588c24be="" src="@/assets/images/compare-24px.svg" class="course-card-info-icon">
            <span class="btn-compare-link__lbl">Сравнение</span>
            <span class="btn-compare-link__badge">{{ totalCount }}</span>
        </router-link>
    </div>
</template>

<style scoped lang="less">
    .btn-compare-link {
        background: transparent;
    }
</style>