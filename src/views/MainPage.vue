<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import ControlPanel from '@/components/main/ControlPanel.vue'
import FilterPanel from '@/components/main/FilterPanel.vue'
import CourseCardList from '@/components/main/CourseCardList.vue'

export default {
  components: {
    Header,
    Footer,
    ControlPanel,
    FilterPanel,
    CourseCardList
  }
}
</script>

<template>
  <div>
    <Header/>
    <div class="container">
      <div class="control-panel-container col-xs-12">
        <ControlPanel/>
      </div>
      <div class="filter-panel-container col-xs-12 col-md-4">
        <FilterPanel/>
      </div>
      <div class="course-card-list-container col-xs-12 col-md-8">
        <CourseCardList/>
        <div class="paginator-container">
          <div class="fake-paginator" style="font-size: 14px; border-bottom: 1px solid rgba(0, 0, 0, 0.12);background-color: #fff;padding: 15px 10px 15px 10px;">
            PAGINATOR
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped lang="less">
    .control-panel-container,
    .paginator-container {
      margin-top: 25px;
    }
    .control-panel-container,
    .filter-panel-container,
    .course-card-list-container {
      margin-bottom: 25px;
    }
</style>