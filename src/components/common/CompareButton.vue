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
    <router-link to="/compare" class="btn-compare-link">
        <svg
            class="btn-compare-link__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
        </svg>
        <span class="btn-compare-link__badge">{{ totalCount }}</span>
        <span class="btn-compare-link__lbl">Сравнение</span>
    </router-link>
</template>

<style scoped lang="less">
    .btn-compare-link {
        margin: 0 15px 0 0;
    }
    .btn-compare-link__icon {
        margin: 0 5px 0 0;
    }
</style>