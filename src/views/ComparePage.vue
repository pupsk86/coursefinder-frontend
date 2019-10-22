<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import ControlPanel from '@/components/compare/ControlPanel.vue'
import CourseCompareTable from '@/components/compare/CourseCompareTable.vue'

export default {
  components: {
    Header,
    Footer,
    ControlPanel,
    CourseCompareTable
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
          <course-compare-table/>
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