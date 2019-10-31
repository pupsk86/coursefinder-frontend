<script>
import CompareButton from '@/components/common/CompareButton.vue'
import FavouriteButton from '@/components/common/FavouriteButton.vue'
import SignInButton from '@/components/common/SignInButton.vue'

export default {
    components: {
        CompareButton,
        FavouriteButton,
        SignInButton
    }
}
</script>

<template>
    <div>
        <compare-button/>
        <favourite-button/>
        <sign-in-button/>
    </div>
</template>

<style scoped lang="less">
</style>
