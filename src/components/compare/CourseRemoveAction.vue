<template>
    <svg
        v-on="$listeners"
        class="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path xmlns="http://www.w3.org/2000/svg" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/>
        <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M0 0h24v24H0V0z"/>
    </svg>
</template>

<style scoped lang="less">
    .svg-icon {
        cursor: pointer;

        &:not(:hover) {
            fill: rgb(126, 126, 126);
        }
    }
</style>