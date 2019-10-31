<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            favoriteTotalCnt: "getFavouriteCoursesCnt"
        })
    }
}
</script>

<template>
    <router-link to="/" class="btn-favorite-link">
        <svg
            class="btn-favorite-link__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path fill="none" d="M0 0h24v24H0V0z"/>
        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
        </svg>
        <span class="btn-favorite-link__badge" v-if="favoriteTotalCnt > 0">{{ favoriteTotalCnt }}</span>
        <span class="btn-favorite-link__lbl">Избранное</span>
    </router-link>
</template>

<style scoped lang="less">
    .btn-favorite-link {
        margin: 0 15px 0 0;
        text-decoration: none;
        color: #333;
        position: relative;
        &:hover {
            color: #514efa
        }
    }
    .btn-favorite-link__icon {
        margin: 0 5px -5px 0;
        fill: rgb(126, 126, 126);
    }
    .btn-favorite-link__badge {
        border-radius: 13px;
        height: 15px;
        width: 15px;
        left: 13px;
        top: -10px;
        background-image: linear-gradient(to bottom, #e1e0f0, #514efa);
        color: #fff;
        font-size: 12px;
        font-weight: bolder;
        padding-top: 1px;
        position: absolute;
    }
</style>