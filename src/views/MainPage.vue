<template>
  <div>
    <Header/>
    <div class="container">
      <div class="control-panel-container col-xs-12">
        <ControlPanel/>
      </div>
      <div class="filter-panel-container col-xs-4">
        <FilterPanel/>
      </div>
      <div class="course-list-container col-xs-8">
        d
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import ControlPanel from '@/components/main/ControlPanel.vue'
import FilterPanel from '@/components/main/FilterPanel.vue'

export default {
  name: 'MainPage',
  components: {
    Header,
    Footer,
    ControlPanel,
    FilterPanel
  }
}
</script>

<style scoped lang="less">
    .control-panel-container {
      margin-top: 25px;
      margin-bottom: 25px;
    }
    .filter-panel-container {
      width: 25%;
      display: inline-block;
      padding-right: 15px;
      margin-bottom: 25px;
    }
    .course-list-container {
      width: 75%;
      display: inline-block;
      padding-left: 15px;
      margin-bottom: 25px;
    }
</style>