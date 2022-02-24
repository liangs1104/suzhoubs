<template>
  <el-container>
    <el-header  style="height: 80px;background-color: rgb(238, 241, 246);padding: 0;">
      <home-header></home-header>
    </el-header>
    <el-container>
      <el-aside width="300px">
        <home-aside></home-aside>
      </el-aside>
      <div class="content-box" style="left: 300px">
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