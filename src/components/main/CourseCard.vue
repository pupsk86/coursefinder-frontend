<template>
    <div class="course-card container-fluid">
        <div class="row">
            <div class="col-xs-8">
                <div class="course-logo course-logo-coursera"/>
                COURSE INFO
            </div>
            <div class="col-xs-4">
                <div class="course-card-photo-container">
                     <img src="../../assets/images/partb_logo_square.jpeg"/>
                </div>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-xs-12">
                COURSE DESCRIPTION
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
    .course-card-photo-container {
        height: 132px;
        overflow: hidden;
    }
    .course-card-photo {
        height: 100%;
        width: 100%;
    }
    .course-logo {
        height: 20px;
        width: 90px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .course-logo-coursera {
        background-image: url(../../assets/images/coursera-logo.svg);
    }
</style>