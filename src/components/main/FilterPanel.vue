<template>
    <div class="filter-panel">
        <div class="filter-element">
            <div class="title">Сайт</div>
            <div class="control">
                <label>
                    <input type="checkbox"/>
                    Coursera
                </label>
            </div>
            <div class="control">
                <label>
                    <input type="checkbox"/>
                    Udemy
                </label>
            </div>
        </div>
        <div class="filter-element">
            <div class="title">Только бесплатные</div>
            <div class="control">
                <label>
                    <input type="checkbox"/>
                    Да
                </label>
            </div>
        </div>
        <div class="filter-element">
            <div class="title">Уровень</div>
            <div class="control">
                <label>
                    <input type="checkbox"/>
                    Начальный
                </label>
            </div>
            <div class="control">
                <label>
                    <input type="checkbox"/>
                    Средний
                </label>
            </div>
            <div class="control">
                <label>
                    <input type="checkbox"/>
                    Продвинутый
                </label>
            </div>
        </div>
        <div class="filter-element">
            <div class="title">Язык</div>
            <div class="control">
                <label>
                    <input type="checkbox"/>
                    Русский
                </label>
            </div>
            <div class="control">
                <label>
                    <input type="checkbox"/>
                    Английский
                </label>
            </div>
        </div>
        <div class="filter-element">
            <div class="title">Субтитры</div>
            <div class="control">
                <label>
                    <input type="checkbox"/>
                    Русский
                </label>
            </div>
            <div class="control">
                <label>
                    <input type="checkbox"/>
                    Английский
                </label>
            </div>
        </div>
        <div class="filter-button-group">
            <div class="filter-button">
                <input type="button" value="Применить"/>
            </div>
            <div class="filter-button">
                <input type="button" value="Сбросить"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .filter-panel {
        font-size: 14px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        background-color: #fff;
        text-align: left;
        padding: 15px 10px 15px 10px;

        .filter-element {
            margin-bottom: 15px;

            .title {
                font-weight: bold;
                margin-bottom: 10px;
            }
            .control {
                margin-bottom: 5px;
            }
            &:last-child {
                margin-bottom: 50px;
            }
        }

        .filter-button {
            input {
                width: 35%;
            }
            margin-top: 10px;
            &:first-child {
                margin-top: 50px;
            }
        }
    }
</style>