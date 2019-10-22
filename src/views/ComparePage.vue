<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import ControlPanel from '@/components/compare/ControlPanel.vue'

export default {
  components: {
    Header,
    Footer,
    ControlPanel
  }
}
</script>

<template>
  <div>
    <Header/>
    <div class="container">
      <h1>Сравнение курсов</h1>
      <div class="control-panel-container col-xs-12">
          <control-panel/>
      </div>
      <div class="compare-table-container col-xs-12">
          <div class="fake-compare-table" style="background-color: rgb(194, 211, 240); height: 670px;">
            COMPARE_TABLE_PLACEHOLDER
          </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped lang="less">
    .control-panel-container,
    .compare-table-container {
      margin-bottom: 25px;
    }
</style>