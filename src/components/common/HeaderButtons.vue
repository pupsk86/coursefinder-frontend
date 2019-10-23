<script>
import CompareButton from '@/components/common/CompareButton.vue'
import FavoriteButton from '@/components/common/FavoriteButton.vue'
import SignInButton from '@/components/common/SignInButton.vue'

export default {
    components: {
        CompareButton,
        FavoriteButton,
        SignInButton
    }
}
</script>

<template>
    <div>
        <compare-button v-bind:totalCount="5"/>
        <favorite-button v-bind:totalCount="2"/>
        <sign-in-button/>
    </div>
</template>

<style scoped lang="less">
</style>
