<template>
    <footer>
        <div class="footer-container">
            <div class="copyright col-xs-6">
                © CourseFinder, 2019
            </div>
            <div class="contacts col-xs-6">
                <a href="mailto:info@coursefinder.ru">info@coursefinder.ru</a>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="less">
    .footer-container {
        width: 100%;
        height: 65px;
        border: 0;
        border-radius: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.12);
        background-color: #ffffff;
    }
    .copyright,
    .contacts {
        
        margin-top: 25px;
        margin-bottom: 25px;
        font-size: .875rem;
    }
    .copyright {
        text-align: left;
    }
    .contacts {
        text-align: right;
    }
</style>