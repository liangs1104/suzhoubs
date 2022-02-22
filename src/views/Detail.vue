<template>
  <el-container id="detail" style="height: 500px; border: 1px solid #eee">
    <el-header  style="height: 80px;background-color: rgb(238, 241, 246);padding: 0;">
      <app-header></app-header>
    </el-header>
    <el-container>
      <el-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header'

export default {
  name: "Detail",
  data() {
    return {}
  },
  components: {
    "app-header": Header,
  },
  methods: {},

};
</script>