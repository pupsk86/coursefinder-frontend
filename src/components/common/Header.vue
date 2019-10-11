<template>
    <header>
        <div class="container">
            <div class="logo"/>
            <CompareButton/>
            <FavouriteButton/>
            <LoginButton/>
        </div>
    </header>
</template>

<script>
//TODO: add CompareButton component
//TODO: add FavouriteButton component
//TODO: add LoginButton component
</script>

<style scoped lang="less">
    header {
        height: 65px;
    }
    .container {
        position: fixed;
        width: 100%;
        left: 0px;
        right: 0px;
        top: 0px;
        border: 0;
        border-radius: 0;
        border-bottom: 1px solid rgba(0,0,0,.12);
        z-index: 3000;
        background-color: #ffffff;
    }
    .logo {
        margin: 5px 50px;
        width: 184px;
        float: left;
        height: 55px;
        background-image: url(../../assets/images/logo.png);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position-y: -65px;
    }
</style>
