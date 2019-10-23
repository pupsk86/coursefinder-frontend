<template>
    <div class="control-panel">
        <label for="control-sort">Показывать: </label>
        <select name="control-sort">
            <option>все характеристики</option>
            <option>различающиеся характеристики</option>
        </select>
        <div class="compare-list-purge-action-container">
            <div class="fake-compare-list-purge-action">
                [Очистить список]
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .control-panel {
        font-size: 14px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        background-color: #fff;
        text-align: left;
        padding: 15px 10px 15px 10px;
    }
    .compare-list-purge-action-container {
        float: right;
    }
</style>