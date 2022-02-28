<template>
  <el-container>
    <el-header style="padding: 0;">
      <home-header></home-header>
    </el-header>
    <el-container>
      <home-aside></home-aside>
      <div class="content-box" style="left: 280px">
        <div class="content">
          <el-main>
            <home-main></home-main>
          </el-main>
        </div>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import HomeAside from '../components/HomeAside'
import HomeMain from '../components/HomeMain'

export default {
  name: "Home",
  data() {
    return {}
  },
  components: {
    "home-header": HomeHeader,
    "home-aside": HomeAside,
    "home-main": HomeMain
  },
  methods: {},

};
</script>