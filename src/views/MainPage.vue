<template>
  <div>
    <Header/>
    <div class="container">
      <div class="control-panel-container">
        <ControlPanel/>
      </div>
      <div class="filter-panel-container">
        <FilterPanel/>
      </div>
      <div class="course-list-container">
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
    .container {
      margin-right: auto;
      margin-left: auto;
      min-height: 50vh;
      @media (min-width: 768px) {
        width: 750px;
      }
      @media (min-width: 992px) {
        width: 970px;
      }
      @media (min-width: 1200px) {
        width: 1170px;
      }
    }
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