<template>
    <div class="control-panel">
        <label for="control-sort">Сортировка: </label>
        <select name="control-sort">
            <option>по популярности</option>
            <option>по дате обновления</option>
            <option>по цене</option>
        </select>
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
</style>